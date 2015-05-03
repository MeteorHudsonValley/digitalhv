//--------------------------------------------
// Global Namespace
//--------------------------------------------
DataNY = {};

// For Collections
DataNY.Coll = {};

DataNY.Regions = {
	UpperHV: { 
		name: "Upper Hudson Valley",
		counties :  ["Columbia","Greene","Rensselaer","Albany"]
	}, 
	LowerHV: { 
		name: "Lower Hudson Valley",
		counties :  ["Dutchess", "Orange", "Ulster", "Sullivan"]
	}, 
	MidHV  : { 
		name: "Mid Hudson Valley",
		counties :  ["Westchester","Rockland","Putnam"]
	}
};

DataNY.upperhv = ["Columbia","Greene","Rensselaer","Albany"];
DataNY.lowerhv = ["Westchester","Rockland","Putnam"];
DataNY.midhv = ["Dutchess","Ulster","Sullivan","Orange"];
DataNY.getRegion = function(county){
	county = county || "Unknown";
	county = county.trim().toLowerCase().capitalizeFirst();
	if (_.contains(DataNY.upperhv, county))
		return "upperhv";
	if (_.contains(DataNY.midhv, county))
		return "midhv";
	if (_.contains(DataNY.lowerhv, county))
		return "lowerhv";
	return null;
};


DataNY.Businesses = {
	EntityType : [
		"DOMESTIC LIMITED LIABILITY COMPANY",
		"FOREIGN BUSINESS CORPORATION",  
		"FOREIGN LIMITED LIABILITY COMPANY",
		"DOMESTIC PROFESSIONAL SERVICE LIMITED LIABILITY COMPANY",
		"DOMESTIC BUSINESS CORPORATION",
		"DOMESTIC NOT-FOR-PROFIT CORPORATION",  
		"FOREIGN PROFESSIONAL SERVICE LIMITED LIABILITY COMPANY",
		"FOREIGN LIMITED PARTNERSHIP",
		"DOMESTIC LIMITED PARTNERSHIP",
		"DOMESTIC PROFESSIONAL CORPORATION",
		"FOREIGN NOT-FOR-PROFIT CORPORATION",
		"FOREIGN PROFESSIONAL CORPORATION",
		"DOMESTIC BUSINESS CORPORATION",
		"FOREIGN BUSINESS CORPORATION",
		"FOREIGN PROFESSIONAL CORPORATION",
		"DOMESTIC PROFESSIONAL CORPORATION",
		"DOMESTIC COOPERATIVE CORPORATION"
	]
};

DataNY.Businesses.getType = function (typeid){
	if (typeid > -1)
		return DataNY.Businesses.EntityType[typeid];
	return null;
};

DataNY.Businesses.getTypeID =  function(type){
	return _.indexOf(DataNY.Businesses.EntityType, type);
};

Debug = {
	log : function(src, msg, data){
		console.log("[datany/" + (src || "-") +"] "+msg, 
			data || "" );
	}
};

//--------------------------------------------
// Helpers
//--------------------------------------------
String.prototype.capitalizeFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


//--------------------------------------------
// Meteor Startup Init (Common)
//--------------------------------------------
Meteor.startup(function(){

	Debug.log("all/init","Initialized ");
});