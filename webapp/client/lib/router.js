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
      Meteor.subscribe("MyCounties"),
      Meteor.subscribe("MyMarkers")
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
  else { this.next();}  
}, 
{
  except: [] // list routes exempt from login check
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


Router.route('/businesses',{
  loadingTemplate: 'loading',

  waitOn: function(){
    return Meteor.subscribe('MyBusinesses',{
      county:null,
      limit:200
    });
  },

  action: function(){
    Session.set("dhv.businesses",{
      all: true, 
      id: null,
      county:null,
      region:null,
      type: null 
    });
    this.render('businesses', {to: "appMain"});
  }
});

Router.route('/businesses/county/:_id', {
  loadingTemplate: 'loading',
  waitOn: function(){
    if (this.params._id==="ALL"){
      console.log("Redirecting for county=ALL");  
      this.redirect('/businesses');
    }
    else {    
      console.log("Subscribing with county=",this.params._id);  
      return Meteor.subscribe('MyBusinesses',{
        county:this.params._id,
        limit:100 
      });
    }
  },

  action: function(){
    Session.set("dhv.businesses",{
      all: false, 
      id: null,
      county:this.params._id,
      region:null,
      type: null 
    });
    this.render('businesses', {to: "appMain"});
  }
});

Router.route('/businesses/id/:_id', function () {
  Session.set("dhv.businesses",{
      all: false, 
      id: this.params._id,
      county:null,
      region:null,
      type: null 
    });
  this.render('businesses', {to: "appMain"});
});

// Redirects
Router.route('/regions/:_id/businesses', function () {
  this.redirect('/businesses');
});
Router.route('/counties/:_id/businesses', function () {
  this.redirect('/businesses/county/'+this.params._id.toUpperCase());
});




Router.route('/businesses/type/:_id', function () {
  Session.set("dhv.businesses",{
      all: false, 
      id: null,
      county:null,
      region:null,
      type: this.params._id 
    });
  this.render('businesses', {to: "appMain"});
});

Router.route('/map', function () {
  this.render('mapPage', {to: "appMain"});
}, { name: 'map' });

Router.route('/map/:lat/:lng', function () {
  this.render('mapPage', {to: "appMain"});
  Session.set("map.center",{
    lat: this.params.lat, 
    lng: this.params.lng}
  );
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




Router.route('/new/:_id', function () {
  Session.set("dhv.content","Creating New "+this.params._id.capitalizeFirst());
  this.render('content', {to: "appMain"});
});
Router.route('/restaurants', function () {
  Session.set("dhv.content","Restaurants Page");
  this.render('content', {to: "appMain"});
});
Router.route('/events', function () {
  Session.set("dhv.content","Events Page");
  this.render('content', {to: "appMain"});
});
Router.route('/people', function () {
  this.render('holder', {to: "appMain"});
});
Router.route('/local', function () {
  Session.set("dhv.content","Local Page");
  this.render('content', {to: "appMain"});
});
Router.route('/jobs', function () {
  Session.set("dhv.content","Jobs Page");
  this.render('content', {to: "appMain"});
});

