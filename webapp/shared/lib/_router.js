//==============================================
// Configure Iron Router (global settings)
//==============================================
Router.configure({

  // define default templates for specific needs
  //   layoutTemplate 	= layout for the entire app
  //   notFoundTemplate = for unknown routes, missing lists
  //   loadingTemplate 	= while subscriptions are loading data
  layoutTemplate    : "appLayout",
  notFoundTemplate  : "pageNotFound",
  loadingTemplate	  : "pageLoading",

  // define GLOBAL subscriptions (wait on these before ANY route
  // is rendered). By contrast ROUTE-SPECIFIC subscriptions will
  // be waited on in the related Route configuration statement.
  waitOn: function () {
    return [
      //Meteor.subscribe("publicLists")
    ];
  }
});