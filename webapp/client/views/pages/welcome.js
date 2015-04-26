Router.route('/welcome', {
	name: 'welcome',
	waitOn: function() { 
		//return Meteor.subscribe('someColl', Meteor.userId()); 
	},
	action: function(){ 
		this.render('pageWelcome');
	}
});