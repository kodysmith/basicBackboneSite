/**
 * Home View is a base page view to display the home screen
 * template: homeTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProfileModel',
  'collections/ProfileCollection',
  'text!templates/profile/profileTemplate.html'
  
], function($, _, Backbone, ProfileModel, ProfileCollection, profileTemplate){

  var ProfileView = Backbone.View.extend({
    model: new ProfileModel,
    el: $("#page"),
    initialize: function() {
        //this.model = new ProfileModel();
        this.render();
    },
    render: function(){
        // display home template to the defined element "el"
      this.$el.html(profileTemplate);   
        // fetch the data from the source using the search string populated by the search form
      
      // fetch the data from the source using the search string populated by the search form
      this.model.fetch({
        reset: true
      });
      
      var self = this;
      self._ = _;
      self.model.fetch({
          success: function (user) {
            debugger
            var template = _.template($('.profileHeader').html(), {artists: self.model.attributes[0]});
            
              // clear the existing results for a new search, and then display the results using the movie model
            self.$el.html(template);
          },
          error: function(response){
            debugger
          }
      });
      
        
        // display the search form on the home screen
        // demonstrating how you can pass element selector or other values to models to manipulate their
        // result destination 
       // var profileGridView = new profileGridView({el:$('#searchFormHolder')});
       // projectGridView.render();
    }
  });

  return ProfileView;
});