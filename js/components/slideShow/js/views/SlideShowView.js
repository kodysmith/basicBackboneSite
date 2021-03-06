/**
 * Slide Show View is to display a slideshow where you instantiate it
 * template: SlideShowTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'components/slideShow/js/collections/ImageCollection',
  'text!../../templates/slideshow1.html'

], function($, _, Backbone, ImageCollection, slideShowTemplate){

  var SlideShowView = Backbone.View.extend({
    el: $("#mainSlideshow"),
    collection: new ImageCollection(),
    initialize: function(){

    },
    render: function(){
      // instantiate a new image collection class to get search results
      
      this.$el.html('yo slideshow');
      // fetch the data from the source using the search string populated by the search form
      this.collection.fetch({
        reset: true
      });
      
      // clear the existing results for a new search, and then display the results using the image model
      this.collection.bind('reset', function () { 
        
        imageData = this.model; 
        var data = {
                      results: this.model,
                      _: _ 
                    };
        // compile the view using the search results template, and the search result data returned
        var compiledTemplate = _.template( slideShowTemplate, data );
        
        // output the compiled template to the defined element
        this.$el.html( compiledTemplate ); 
      });
    }
  });

  return SlideShowView;
  
});