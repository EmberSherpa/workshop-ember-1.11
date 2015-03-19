import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [ 'foo', 'bar', 'baz', 'woo', 'goo', 'daa', 'brr' ];
  }
});
