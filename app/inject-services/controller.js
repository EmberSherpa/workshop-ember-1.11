import Ember from 'ember';

export default Ember.Controller.extend({
  storage: Ember.inject.service('local-storage')
});
