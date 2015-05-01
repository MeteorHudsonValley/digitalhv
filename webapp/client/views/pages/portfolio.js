var myServices = [
	{
		icon:"bank", 
		title:"Businesses",
		headline: "List open positions. Connect to local techsperts. Showcase your mobile or web apps. ",
		link: "/businesses"
	},
	{
		icon:"user", 
		title:"People",
		headline: "List your technology skills. Connect to local businesses. Publicize your projects.",
		link: "/people"
	},
	{
		icon:"calendar", 
		title:"Events",
		headline: "Find local technology meetups, conferences and training events. Level up!",
		link: "/events"
	},
	{
		icon:"leaf", 
		title:"Go Local",
		headline: "Showcase places and products made in Hudson Valley. Share local tips.",
		link: "/businesses"
	}
];

var myRegions = [
	{
		image: "img/capitol.jpg",
		name: "Upper Hudson Valley",
		link: "/regions/upperhv"
	},
	{
		image: "img/dutchess.jpg",
		name: "Mid Hudson Valley",
		link: "/regions/midhv"
	},
	{
		image: "img/westchester.jpg",
		name: "Lower Hudson Valley",
		link: "/regions/lowerhv"
	}
];

Template.portfolio.helpers({
	services: function(){
		return myServices;
	},

	regions: function(){
		return myRegions;
	}
});