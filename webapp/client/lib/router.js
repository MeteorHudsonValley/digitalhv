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
      'appNav'   : {to: 'appNav'},
      'appHeader': {to: 'appHeader'},
      'appFooter': {to: 'appFooter'}
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
  this.layout('layout');
  this.render('appNav',   {to: 'appNav'});
  this.render('appHeader',{to: 'appHeader'});
  this.render('appFooter',{to: 'appFooter'});

  if (!Meteor.user() && !Meteor.loggingIn()) {
    //this.redirect("/welcome");
    this.next();
  } 
  else {
    this.next();
  }
  
}, 
{
  except: [
    // list routes exempt from login check
  ]
});


//----------------------------------------
// Given as example to show how you can
// override default yields.
//
// In general, router.js pre-routing code
// sets the defaults so only this route
// template needs to be rendered as shown
// for subsequent route declarations
//----------------------------------------
Router.route('/home', function () {
  this.layout('layout');
  this.render('appNav',   {to: 'appNav'});
  this.render('appHeader',  {to: 'appHeader'});
  this.render('appFooter',  {to: 'appFooter'});
  this.render('portfolio',  {to: "appMain"});
});

Router.route('/welcome', function () {
  this.render('portfolio', {to: "appMain"});
});

Router.route('/', function () {
  this.render('content', {to: "appMain"});
});