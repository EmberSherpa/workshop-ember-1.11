import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('inject-services');
  this.route('inline-if');
  this.route('no-bind-attr');
  this.route('each-with-index');
  this.route('component-helper');
  this.route('object-controller', function(){
    this.route('old-school');
    this.route('new-shiny');
  });
});

export default Router;
