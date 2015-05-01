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
};