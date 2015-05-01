Template.mapPage.helpers({
	mapOptions: function() {
// Make sure the maps API has loaded
		if (GoogleMaps.loaded()) {
		  // Map initialization options
			return {
				center: new google.maps.LatLng(41.5202778, -73.9969444),
				zoom: 9
			};
		}
	}
});