var myServices = [
	{
		icon:"bank", 
		title:"Businesses",
		headline: "List open positions. Connect to local techsperts. Showcase your mobile or web apps. ",
		link: "/businesses#top"
	},
	{
		icon:"user", 
		title:"People",
		headline: "List your technology skills. Connect to local businesses. Publicize your projects.",
		link: "/people#top"
	},
	{
		icon:"calendar", 
		title:"Events",
		headline: "Find local technology meetups, conferences and training events. Level up!",
		link: "/events#top"
	},
	{
		icon:"leaf", 
		title:"Go Local",
		headline: "Showcase places and products made in Hudson Valley. Share local tips.",
		link: "/local#top"
	}
];

var myRegions = [
	{
		image: "img/capitol.jpg",
		name: "Upper Hudson Valley",
		link: "/regions/upperhv#top"
	},
	{
		image: "img/dutchess.jpg",
		name: "Mid Hudson Valley",
		link: "/regions/midhv#top"
	},
	{
		image: "img/westchester.jpg",
		name: "Lower Hudson Valley",
		link: "/regions/lowerhv#top"
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