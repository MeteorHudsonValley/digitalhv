//----------------------------------------
// Router configuration (general)
//----------------------------------------
Router.configure({

  // define default templates for specific needs
  //   layoutTemplate 	= layout for the entire app
  //   notFoundTemplate = for unknown routes, missing lists
  //   loadingTemplate 	= while subscriptions are loading data
  layoutTemplate	: "layout",
  notFoundTemplate: "notFound",
  loadingTemplate	: "loading",
  yieldRegions: {
      'sidebar' : {to: 'appNav'},
      'footer'  : {to: 'appFooter'},
      'portfolio': {to: 'appMain'}
  },

  // define subscriptions you want to wait on (to complete)
  // before rendering ANY page. These ensure the data exists
  // before route page is rendered
  // NN TODO: check this isn"t excessive (move to per-route?)
  waitOn: function () {
    return [
      //Meteor.subscribe("publicLists"), Meteor.subscribe("todos")
    ];
  }
});

//----------------------------------------
// Default "Before" Action
// always: go to sign-in page if not logged in
// except: if your are on the listed route
//----------------------------------------
Router.onBeforeAction(function () {
  if (!Meteor.user() && !Meteor.loggingIn()) {
    this.redirect("/");
  } else {
    this.next();
  }
}, {
  except: [
    "/"
  ]
});