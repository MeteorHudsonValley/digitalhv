//==============================
// Client-side initializations
//==============================
Meteor.startup(function () {

	// Initialize state
	/*
  	Session.set("sidebar.type","regions.all");
  	Session.set("sidebar.subtype","counties.all");
  	*/

  	Session.set("dhv.context","home");
  	Session.set("dhv.region",DataNY.Regions.MidHV.name.capitalizeFirst());
  	Session.set("dhv.county",null);
  	Session.set("dhv.zipcode",null);
  	//Router.go("/");	

	Debug.log("client/init","Initialized ");
});