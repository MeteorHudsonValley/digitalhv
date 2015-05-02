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


// Load Google Maps only if we got to map route
Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['map'] });



//----------------------------------------
// Given as example to show how you can
// override default yields.
//
// In general, router.js pre-routing code
// sets the defaults so only this route
// template needs to be rendered as shown
// for subsequent route declarations
//----------------------------------------
Router.route('/', function () {
  this.render('portfolio', {to: "appMain"});
});

Router.route('/home', function () {
  this.render('portfolio', {to: "appMain"});
});

Router.route('/welcome', function () {
  this.render('portfolio', {to: "appMain"});
});

Router.route('/businesses', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/restaurants', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/events', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/people', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/local', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/jobs', function () {
  this.render('content', {to: "appMain"});
});
Router.route('/map', function () {
  this.render('mapPage', {to: "appMain"});
});
Router.route('/map/:lat/:lng', function () {
  this.render('mapPage', {to: "appMain"});
  Session.set("map.center",{lat: this.params.lat, lng: this.params.lng});
});

Router.route('/regions', function () {
  //Session.set("sidebar.type","regions.all");
  Session.set("dhv.region","all");
  Session.set("dhv.county","all");
  this.render('regions', {to: "appMain"});
});

Router.route('/regions/:_id', function () {
  //Session.set("sidebar.type","regions."+this.params._id);
  Session.set("dhv.region",this.params._id);
  Session.set("dhv.county","all");
  this.render('regions', {to: "appMain"});
});

Router.route('/counties', function () {
  //Session.set("sidebar.subtype","counties.all");
  Session.set("dhv.region","all");
  Session.set("dhv.county","all");
  this.render('counties', {to: "appMain"});
});

Router.route('/counties/:_id', function () {
  console.log("Routing to: "+this.params._id.capitalizeFirst())
  Session.set("dhv.county",this.params._id.capitalizeFirst());
  this.render('counties', {to: "appMain"});
});

