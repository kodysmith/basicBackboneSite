/**
 * Header View Component is to display the main site header
 * template: headerTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!components/header/templates/headerTemplate.html',
  'components/header/js/views/HeaderView'

], function($, _, Backbone, headerTemplate, HeaderView){

  var HeaderComponent = function(opt){

    this.views = {headerView: new HeaderView(opt)};   
    
    this.render = function(){
      this.views.headerView.render();
    };
    
  }

  return HeaderComponent;
  
});