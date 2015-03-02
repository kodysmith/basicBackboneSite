/**
 * Home View is a base page view to display the home screen
 * template: homeTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/search_results/ProjectGridView',
  'components/slideShow/js/views/SlideShowView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, ProjectGridView, SlideShowView, homeTemplate){

  var HomeView = Backbone.View.extend({

    el: $("#page"),
    subEl: {},
    subViews: {},
    initialize: function(){
      this.$el.html(homeTemplate);  
      this.subViews.slideShowView = new SlideShowView({el: $("#searchFormHolder")});
      this.subViews.projectGridView = new ProjectGridView({el:$('#searchResults')});
      
    },
    
    

    render: function(){
        // display home template to the defined element "el"
        
        // display the search form on the home screen
        // demonstrating how you can pass element selector or other values to models to manipulate their
        // result destination 
        this.subViews.slideShowView.render();
        this.subViews.projectGridView.render();

        
    }
  });

  return HomeView;
});