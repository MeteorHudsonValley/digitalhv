Template.content.helpers({
	title: function(){
		return (Session.get("dhv.content") || "");
	}
});