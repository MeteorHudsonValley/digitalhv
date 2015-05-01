Template.holder.helpers({
	currentRoute: function(){
		console.log(Router.current().url);
		return Router.current().url;
	}
});