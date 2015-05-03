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
				return DataNY.Coll.Businesses.find(
					{},
					{sort:{dos_id:1}}
				);
			if (business.id)
				return DataNY.Coll.Businesses.find(
					{_id: business.id},
					{sort:{dos_id:1}}
				);
			if (business.county)
				return DataNY.Coll.Businesses.find(
					{county: business.county},
					{sort:{dos_id:1}}
				);
			if (business.type)
				return DataNY.Coll.Businesses.find(
					{entity_type: DataNY.Coll.Businesses.getType(business.type)},
					{sort:{dos_id:1}}
				);
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
