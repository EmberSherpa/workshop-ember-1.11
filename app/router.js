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
});

export default Router;
