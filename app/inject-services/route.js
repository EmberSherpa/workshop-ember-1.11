import Ember from 'ember';

export default Ember.Route.extend({
  storage: Ember.inject.service('local-storage')
});
