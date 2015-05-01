//==============================
// Server-side initializations
//==============================
Meteor.startup(function () {

	// If you use browser-policy package, uncomment below
	// See: https://atmospherejs.com/natestrauser/font-awesome
	//
	// BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
	initFixtures();
	Debug.log("server/next","Initialized ");
});

//==============================
// Load Data Fixtures
//==============================
var initFixtures = function(){

	// --- assets/hierarchy.json
	//https://data.ny.gov/Government-Finance/New-York-State-Cities-Towns-and-Villages-per-Count/y6cw-5z7p
	//https://data.ny.gov/resource/y6cw-5z7p.json?$limit=1000&$offset=0


	// --- assets/counties.json
};