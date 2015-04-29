//==============================
// Client-side initializations
//==============================
Meteor.startup(function () {

	// Initialize state
  	Session.set("sidebar.type","regions.all");
  	Session.set("sidebar.subtype","counties.all");
  	Router.go("/");	

});

//==============================
// Global stuff..
//==============================
String.prototype.capitalizeFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}