Router.route('/', {
	name: 'home',
	waitOn: function() { 
		//return Meteor.subscribe('someColl', Meteor.userId()); 
	},
	action: function(){ 
		this.render('pageHome');
	}
});