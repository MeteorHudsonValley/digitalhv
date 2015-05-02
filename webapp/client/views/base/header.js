Template.appHeader.helpers({

	regions: function(){
		var regions = [	
			{ 
				name: DataNY.Regions.UpperHV.name,
				regionID: "upperhv",
				counties: DataNY.Regions.UpperHV.counties
			},
			{ 
				name: DataNY.Regions.MidHV.name,
				regionID: "midhv",
				counties: DataNY.Regions.MidHV.counties
			},
			{ 
				name: DataNY.Regions.LowerHV.name,
				regionID: "lowerhv",
				counties: DataNY.Regions.LowerHV.counties
			}
		];
		return regions;
	},

	jobCount: function(){
		// TODO: Get Hiring Count
		return 0;
	},

	isHiring: function(jobCount){
		if (jobCount > 0)
			return "active";
		return "";
	}
});