/*
{
	"_id" : "rpZwjNy2woWqtfER8",
	"zip5" : "12207",
	"phone" : "(518)447-7040",
	"location" : {
		"needs_recoding" : false,
		"longitude" : "-73.7539594378",
		"latitude" : "42.6501637986",
		"human_address" : "{\"address\":\"112 State Street\",\"city\":\"Albany\",\"state\":\"\",\"zip\":\"12207\"}"
	},
	"address" : "112 State Street",
	"county" : "Albany",
	"county_website" : {
		"url" : "http://www.albanycounty.com/"
	},
	"longitude" : "-73.7539594378",
	"latitude" : "42.6501637986",
	"contact_type" : "County Executive's Office",
	"county_seat" : "City of Albany",
	"city" : "Albany",
	"fixture" : true,
	"created" : ISODate("2015-05-02T01:53:18.635Z"),
	"creator" : "DibCkXHuGQRKGfhkR",
	"region" : "upperhv",
	"count_municipality" : "6",
	"type" : "Village",
	"type_code" : "4"
}
*/
Template.regionHeader.helpers({
	route: function(){
		return Router.current().url;
	},
	count: function(){
		var counts = {
			businesses: 0,
			restaurants: 0,
			local: 0,
			events: 0,
			people: 0,
			jobs: 0
		};

		// TODO: Check context, return relevant number of 
		return counts;
	}
});


Template.regions.helpers({
	regions: function(){
		var region=Session.get("dhv.region") || "all";
		console.log("region="+region);
		if (region==="all")
			return DataNY.Coll.Counties.find();
		else {
			return DataNY.Coll.Counties.find({region: region});
		}
	}

});

Template.counties.helpers({
	counties: function(){
		var county=Session.get("dhv.county") || "all";
		console.log("county="+county);
		if (county==="all")
			return DataNY.Coll.Counties.find();
		else {
			return DataNY.Coll.Counties.find({county: county});
		}
	}

});
