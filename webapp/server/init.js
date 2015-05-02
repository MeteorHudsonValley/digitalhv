//==============================
// Server-side initializations
//==============================
Meteor.startup(function () {

	// If you use browser-policy package, uncomment below
	// See: https://atmospherejs.com/natestrauser/font-awesome
	//
	// BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
	initFixtures();
	initPublications();
	Debug.log("server/next","Initialized ");
});

//==============================
// Publish Data Query EP
//==============================
var initPublications = function(){
	//TODO
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
};


/*
{
    "county": "Albany",
    "count_municipality": "3",
    "type": "City",
    "type_code": "2"

    "region" : String
    created : Date
    creator: UserID
    fixture: true
  }
*/

var upperhv = ["Columbia","Greene","Rensselaer","Albany"],
	lowerhv = ["Westchester","Rockland","Putnam"],
	midhv = ["Dutchess","Ulster","Sullivan","Orange"];
var getRegion = function(county){
	county = county || "Unknown";
	county = county.trim().toLowerCase().capitalizeFirst();
	if (_.contains(upperhv, county))
		return "upperhv";
	if (_.contains(midhv, county))
		return "midhv";
	if (_.contains(lowerhv, county))
		return "lowerhv";
	return null;
};

// Store only data for HV counties
var loadCountyData = function(userID){
	var count = DataNY.Counties.find({isFixture: true}).count();
	if (count>0) 
		return;

	var asset = Assets.getText("assets/counties.json"),
		counties = JSON.parse(asset),
		current = new Date();

	_.each(counties, function(item,index){
			item.region = getRegion(item.county);
			if (item.region){
				item.fixture = true;
				item.created = current;
				item.creator = userID || null;
				item._id = DataNY.Counties.insert(item);				
			}
	});

	//updateCountyData();
};

var updateCountyData = function(){

	var asset = Assets.getText("assets/hierarchy.json"),
		counties = JSON.parse(asset);

	_.each(counties, function(item,index){
		//console.log("Updating county="+item.county+" with item",item);
		DataNY.Counties.update(
			{county: item.county},
			{$set: item}
		);
	});
};

