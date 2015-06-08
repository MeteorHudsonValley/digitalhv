var myServices = [
	{
		icon:"bank", 
		title:"Local Businesses",
		headline: "List open positions. Connect to local techsperts. Showcase your mobile or web apps. ",
		link: "/businesses"
	},
	{
		icon:"user", 
		title:"Local People",
		headline: "List your technology skills. Connect to local businesses. Publicize your projects.",
		link: "/people"
	},
	{
		icon:"calendar", 
		title:"Local Events",
		headline: "Find local technology meetups, conferences and training events. Level up!",
		link: "/events"
	},
	{
		icon:"leaf", 
		title:"Local Made",
		headline: "Showcase apps and products made in Hudson Valley. Share local tips.",
		link: "/local"
	}
];

var myRegions = [
	{
		image: "img/capitol.jpg",
		name: "Upper Hudson Valley",
		link: "/regions/upperhv",
		bg: "upperhv"
	},
	{
		image: "img/dutchess.jpg",
		name: "Mid Hudson Valley",
		link: "/regions/midhv",
		bg: "midhv"
	},
	{
		image: "img/westchester.jpg",
		name: "Lower Hudson Valley",
		link: "/regions/lowerhv",
		bg: "lowerhv"
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