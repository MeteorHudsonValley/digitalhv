//---------------------------------------------------------
// Counties Collection Helper
// https://data.ny.gov/resource/4xc7-bukh.json?$limit=4000
//
/*
	{
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
	  "city" : "Albany"
}
*/
//---------------------------------------------------------
Counties = new Mongo.Collection("counties");

DataNY.Counties = Counties;

//---------------------------------------------------------
// Businesses Collection Helper
//
//
/*
	{
	    "dos_process_zip": "11212",
	    "dos_process_state": "NEW YORK",
	    "jurisdiction": "NEW YORK",
	    "dos_process_city": "BROOKLYN",
	    "dos_process_name": "0000 AUTO RESCUE TRANSPORT CORP.",
	    "current_entity_name": "0000 AUTO RESCUE TRANSPORT CORP.",
	    "dos_process_address_1": "382 RAMSEN AVE",
	    "dos_id": "4264790",
	    "initial_dos_filing_date": "2012-06-28T00:00:00",
	    "county": "KINGS",
	    "entity_type": "DOMESTIC BUSINESS CORPORATION"
  	},
*/
//---------------------------------------------------------
var Businesses = new Mongo.Collection("businesses");

Businesses.helpers({
	name 	: function() { return this.dos_process_name; },
	entity 	: function() { return this.current_entity_name; },
	type 	: function() { return this.entity_type; },
	date 	: function() { return this.dos_process_city; },
	address : function() { return this.dos_process_address_1; },
	city 	: function() { return this.dos_process_city; },
	state 	: function() { return this.dos_process_state; },
	zipcode : function() { return this.dos_process_zip; }
});

DataNY.Businesses = Businesses;

//---------------------------------------------------------