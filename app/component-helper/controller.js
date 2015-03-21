import Ember from 'ember';

export default Ember.Controller.extend({
  options: Ember.computed.mapBy('model', 'name')
});
