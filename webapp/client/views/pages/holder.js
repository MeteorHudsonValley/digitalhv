Template.holder.helpers({
	currentRoute: function(){
		console.log(Router.current().url);
		return Router.current().url;
	},

	items: function(){
		return [
			"business",
			"restaurants",
			"local",
			"people",
			"events",
			"jobs",
			
			"upperhv",
			"lowerhv",
			"midhv",

			"columbia",
			"greene",
			"rensselaer",
			"albany",

			"rockland",
			"putnam",
			"westchester",

			"dutchess",
			"orange",
			"ulster",
			"sullivan"
		];
	}
});