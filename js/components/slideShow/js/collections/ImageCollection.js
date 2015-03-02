/**
 * Movie Collection searches a datasource api for movie information
 * source: rotten tomatoes 
 * source return: JSONP
 * API Type: remote (XSS)
 * 
 * return: backbone collection of movie objects
 * input: options.query = search string for movie titles
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'components/slideShow/js/models/ImageModel'
], function($, _, Backbone, ImageModel) {
  	var ImageCollection = Backbone.Collection.extend({
				model: ImageModel,
				url: '../data/slideshow1.jsonp',
				//url: 'http://www.omdbapi.com/?r=JSON&',
				//url: 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=',
				//url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=7r8zawrjdmp8cp89rnrbh6dg&q=',
				sync: function(method, collection, options){
					options.dataType = 'json';
					return Backbone.sync(method,collection,options);
				},
				parse : function(response) {
					return response['images'];
				},
				error : function(collection, response, options) {
					error.log(response.statusText);
				},
				initialize: function(){
					
				},
				timeout : 5000
			});
	return ImageCollection;
});
