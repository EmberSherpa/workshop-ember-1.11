import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      firstName: 'Tom',
      lastName: 'Huda'
    };
  }
});
