define([
  'underscore',
  'backbone'
], function(_, Backbone) {
	var ProfileModel = Backbone.Model.extend({
		url: "../data/profiles.jsonp",
		
	});
	return ProfileModel;

});
