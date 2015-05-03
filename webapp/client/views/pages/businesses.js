var _counties = _.union(DataNY.upperhv, DataNY.midhv, DataNY.lowerhv);

Template.business.helpers({	
	countyCase: function(){
		var county = this.county.toLowerCase().capitalizeFirst();
		return county;
	},
});

Template.businesses.helpers({

	businesses: function(){
		/*
		{
      		all: false, 
      		id: null,
      		county:this.params._id,
      		type: null 
    	}
		 */
		var business=Session.get("dhv.businesses");
		if (business){
			if (business.all) 
				return DataNY.Coll.Businesses.find({});
			if (business.id)
				return DataNY.Coll.Businesses.find({_id: business.id});
			if (business.county)
				return DataNY.Coll.Businesses.find({county: business.county});
			if (business.type)
				return DataNY.Coll.Businesses.find({
					entity_type: DataNY.Coll.Businesses.getType(business.type)
				});
		}

		//TODO
		return [];
	},

	counties: function(){
		console.log("counties: ",_counties);
		return _counties;
	},

	capitalizeAll: function (county){
		return county.toUpperCase();
	}
});
