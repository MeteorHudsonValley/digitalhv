Template.sideBar.created = function(){
	Session.set("sidebar.visible",true);
};

Template.sideBar.helpers({	

	offCanvas:  function(){
		var visible = Session.get("sidebar.visible");
		if (visible) 
			return "";
		return "visible-xs text-center"; 
	},

	glyphiconDirection: function(){
		var visible = Session.get("sidebar.visible");
		/*
		if (visible) 
			return "glyphicon-chevron-right"
		return "glyphicon-chevron-left";
		*/
		return "";
	},

	showLarge: function(){
		var visible = Session.get("sidebar.visible");
		if (!visible) 
			return "visible-xs"
		return "hidden-xs";		
	},

	showSmall: function(){
		var visible = Session.get("sidebar.visible");
		if (!visible) 
			return "hidden-xs"
		return "visible-xs";		
	},
});

Template.sideBar.events({
	'click #sidebarToggle': function(event, template){
		DigitalHV.log("c/sideBar.js","Sidebar click: event", event);
		//Session.set("sidebar.visible", !Session.get("sidebar.visible") );
	}
});