//================================================
// TODO: Make this configurable
//================================================
var options = {};

options.menu = [
	{ name: "Businesses", link:"/businesses", icon:"fa-bank" },
	{ name: "Restaurants", link:"/restaurants", icon:"fa-beer" },
	{ name: "Go Local", link:"/local", icon:"fa-leaf" },
	{ name: "Events", 	link:"/events", icon:"fa-calendar" },
	{ name: "People", link:"/people", icon:"fa-user" },
	{ name: "Jobs", link:"/jobs", icon:"fa-bullhorn" },

];


/*
options.regions = [
	{ name: "Upper Hudson Valley", link:"/regions/upperhv" },
	{ name: "Mid Hudson Valley", link:"/regions/midhv" },
	{ name: "Lower Hudson Valley", link:"/regions/lowerhv" }
];
options.upperhv = [
	{ name: "Columbia", link: "/counties/columbia" },
	{ name: "Greene", link: "/counties/greene" },
	{ name: "Rensselaer", link: "/counties/rensselaer" },
	{ name: "Albany", link: "/counties/albany" }
];
options.lowerhv = [
	{ name: "Westchester", link: "/counties/westchester" },
	{ name: "Rockland", link: "/counties/rockland" },
	{ name: "Putnam", link: "/counties/putnam/" }
];
options.midhv = [
	{ name: "Dutchess", link: "/counties/dutchess" },
	{ name: "Orange", link: "/counties/orange" },
	{ name: "Ulster", link: "/counties/ulster" },
	{ name: "Sullivan", link: "/counties/sullivan" }
];
*/

//================================================
// TODO: Remove jQuery handling, move to events
//================================================
Template.appNav.rendered = function(){

	$("#menu-close").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

	// Opens the sidebar menu
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

	// Scrolls to the selected menu item on the page
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || 
	        	location.hostname == this.hostname) {

	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});
};

//================================================
// Events
//================================================
Template.appNav.events({
	'click': function(event){
		//event.preventDefault();
	}
});

//================================================
// Helpers
//================================================
Template.appNav.helpers({

	options: function(){
		return options.menu;
	}

	/*
	options: function(){ 
		var type = Session.get("sidebar.type"), 
			subtype = Session.get("sidebar.subtype");

		if (subtype!="counties.all")
			return [];
		
		if (type=="regions.all")
			return options.regions;
		else if (type=="regions.upperhv")
			return options.upperhv;
		else if (type=="regions.lowerhv")
			return options.lowerhv;
		else if (type=="regions.midhv")
			return options.midhv;
		return [];
	}
	,showCounty: function(){
		var route = Router.current();
		if (route && route.url &&
			route.url.indexOf("/counties")> -1)
			return true;
		if (route && route.url && route.params &&
			route.url.indexOf("/regions")> -1 &&
			route.params._id !=null)
			return true;
		return false;
	}
	,regionBreadcrumb: function(){
		var type = Session.get("sidebar.type");
		if (type=="regions.all")
			return " > All";
		else if (type=="regions.upperhv")
			return " > Upper Hudson";
		else if (type=="regions.lowerhv")
			return " > Lower Hudson";
		else if (type=="regions.midhv")
			return " > Mid Hudson";
		return "";
	}
	,countyBreadcrumb: function(){
		var route = Router.current(),
			crumb = "none";
		if (route && route.url && 
			route.url.indexOf("/regions")> -1 )
			crumb = "all";
		else if (route && route.params && route.params._id)
			crumb = route.params._id;
		crumb = crumb.capitalizeFirst();
		return " > "+crumb;
	}
	*/
});