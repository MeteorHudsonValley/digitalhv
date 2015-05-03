//==============================
// Server-side initializations
//==============================
Meteor.startup(function () {

	setIndexes();

	// If you use browser-policy package, uncomment below
	// See: https://atmospherejs.com/natestrauser/font-awesome
	//
	// BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
	initFixtures();
	initPublications();
	Debug.log("server/next","Initialized ");
});

var setIndexes = function(){
	DataNY.Coll.Businesses._ensureIndex({ 
		"dos_id": 1,
		"county": 1,
		"entity_type": 1,
		"initial_dos_filing_date":1,
		"dos_process_name":1
	});
};

//==============================
// Publish Data Query EP
//==============================
var initPublications = function(){

	Meteor.publish("MyMarkers", function(){
		return DataNY.Coll.Markers.find({});
	});

	Meteor.publish("MyBusinesses", function(options){
		var _options 	= options ||{},
			_sort 		= { dos_process_name: -1 },
			_limit		= _options.limit,
			_query 		= {},
			_fields		= {
				dos_id: 1,
				current_entity_name: 1,
				dos_process_address_1:1,
				dos_process_city:1,
				county: 1,
				region: 1,
				countyCase:1,
				entity_type: 1
			};

		if (options.county) {
			_query={county: options.county};
		}

		return DataNY.Coll.Businesses.find(
				_query, 
				{
					sort : _sort, 
					limit: _limit,
					fields: _fields
				}
			);
	});

	Meteor.publish("MyCounties", function(){
		return DataNY.Coll.Counties.find({});
	});
}

//==============================
// Load Data Fixtures
//==============================
var initFixtures = function(){

	// --- assets/hierarchy.json
	//https://data.ny.gov/Government-Finance/New-York-State-Cities-Towns-and-Villages-per-Count/y6cw-5z7p
	//https://data.ny.gov/resource/y6cw-5z7p.json?$limit=1000&$offset=0

	// --- assets/counties.json

	// --- assets/business/dutchess.json
	// https://data.ny.gov/resource/n9v6-gdp6.json?$limit=5000&$offset=0&county=DUTCHESS&$order=initial_dos_filing_date%20DESC

	// Default user
	var user = Meteor.users.findOne({username: "admin"});
	if (!user){
		user = {
	      email: "admin@digitalhv.com",
	      password: "n1mdaHV",
	      name: "Digital H Vee",
	      username: "admin",
	      profile: {
	        active: true
	      }
		};
		user.fixture = true;
		user.profile.name = user.name;
		user._id = Accounts.createUser(user);
		Debug.log("Admin user created",user); 
	}

	loadCountyData(user._id);
	loadBusinessData(user._id);
};

// Store only data for HV counties
var loadBusinessData = function(userID){
	var count = DataNY.Coll.Businesses.find({fixture: true}).count();
	if (count>0) 
		return;

	var current = new Date();
	loadBusinessDataForCounty(userID, "albany", current);
	loadBusinessDataForCounty(userID, "columbia", current);
	loadBusinessDataForCounty(userID, "dutchess", current);
	loadBusinessDataForCounty(userID, "greene", current);
	loadBusinessDataForCounty(userID, "orange", current);
	loadBusinessDataForCounty(userID, "putnam", current);
	loadBusinessDataForCounty(userID, "rensselaer", current);
	loadBusinessDataForCounty(userID, "rockland", current);
	loadBusinessDataForCounty(userID, "sullivan", current);
	loadBusinessDataForCounty(userID, "ulster", current);
	loadBusinessDataForCounty(userID, "westchester", current);
}

var loadBusinessDataForCounty = function(userID, county, date){
	console.log("Loading "+county+" data");
	var asset = Assets.getText("assets/business/"+county+".json"),
		counties = JSON.parse(asset);

	_.each(counties, function(item,index){
			item.countyCase = item.county.toLowerCase().capitalizeFirst();
			item.region = DataNY.getRegion(item.countyCase);
			if (item.region){
				item.longitude = 0;
				item.latitude = 0;
				item.fixture = true;
				item.entity_type_id = DataNY.Businesses.getTypeID(item.entity_type);
				item.created = date;
				item.creator = userID || null;
				item._id = DataNY.Coll.Businesses.insert(item);				
			} 
	});
}


// Store only data for HV counties
var loadCountyData = function(userID){
	var count = DataNY.Coll.Counties.find({fixture: true}).count();
	if (count>0) 
		return;

	var asset = Assets.getText("assets/counties.json"),
		counties = JSON.parse(asset),
		current = new Date();

	_.each(counties, function(item,index){
			item.region = DataNY.getRegion(item.county);
			if (item.region){
				item.mTown = "0";
				item.mVillage = "0";
				item.mCity = "0";
				item.fixture = true;
				item.created = current;
				item.creator = userID || null;
				item._id = DataNY.Coll.Counties.insert(item);				
			} 
	});

	updateCountyData();
};

/*
  {
    "county": "Albany",
    "count_municipality": "6",
    "type": "Village",
    "type_code": "4"
  },
*/
var updateCountyData = function(){

	var asset = Assets.getText("assets/hierarchy.json"),
		counties = JSON.parse(asset);

	_.each(counties, function(item,index){
		//console.log("Updating county="+item.county+" with item",item);
		var data;
		if (item.type==="Village") 
			data = {mVillage: item.count_municipality};
		else if (item.type==="Town") 
			data = {mTown: item.count_municipality};
		else if (item.type==="City") 
			data = {mCity: item.count_municipality};

		DataNY.Coll.Counties.update(
			{county: item.county},
			{$set: data}
		);
	});
};

