//--------------------------------------------
// Global Namespace
//--------------------------------------------
DataNY = {};

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
}

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