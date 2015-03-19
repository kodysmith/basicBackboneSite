/**
 * AppRouter is the main router class for this app
 * 
 *          additional routers can be defined, as more complexity is needed, but for now
 *          this is the only router required for this app
 * 
 * Filename: router.js
 * 
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'components/header/comp',
  'views/home/FooterView',
  'views/home/HomeView',
  'views/search_results/ProjectListView',
  'views/search_results/ProjectGridView',
  'views/search_forms/ProjectSearchFormView',
  'views/profilePage/ProfileView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, HeaderComponent, FooterView, HomeView, ProjectListView, ProjectGridView, ProjectSearchFormView, ProfileView, HeaderTemplate) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      "": "index",  // index with no slash
      "/": "index", // index with one trailing slash
      "/#":"index", // index with a hash 
      "profile(/)": "profilePage", // profile page
      "projects/list/:searchString":"projectsList",  // display movies search list view using "searchString"
      "projects/grid/:searchString":"projectsGrid",  // display movies search grid view using "searchString"
      "*actions": "defaultRoute" // Backbone will try match the route above first
    },
    // index function displays the default home screen 
    index: function(){
      var headerComponent = new HeaderComponent({el:"#header", headerTemplate:HeaderTemplate});
      headerComponent.render();
    },
    profilePage: function(){
      var profileView = new ProfileView();
      profileView.render();
    },
    // moviesList function displays and processes search results based on URL "searchString"
    projectsList: function(searchString){
      var moviesListView = new ProjectListView();
      moviesListView.render(searchString);
    },
    // moviesGrid function displays and processes search results based on URL "searchString"
    projectsGrid: function(searchString){
      var projectsGridView = new ProjectGridView();
      projectsGridView.render(searchString);
    }
    
  });
  
  // initialize sets up the router and default views that display on all pages
  var initialize = function(){

    var app_router = new AppRouter;
    
    // display the header at all times
    var headerComponent = new HeaderComponent({el:"#footer"});
    headerComponent.render();
    
    // the purpose of this app is to Search for movies, so this should display always
    var projectSearchFormView = new ProjectSearchFormView();
    projectSearchFormView.render();

    // display the footer at all times
    var footerView = new FooterView();    
    //footerView.render();
    
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});