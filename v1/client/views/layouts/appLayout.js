Template.appLayout.helpers({
	isActive: function(){
		if (Session.get("sidebar.visible")) 
			return "";
		return "active";
	}
});