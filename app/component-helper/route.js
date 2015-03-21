import Ember from 'ember';

// BEGIN-SNIPPET component-helper-route
export default Ember.Route.extend({
  model() {
    return [ { name: 'red-foo' }, { name: 'blue-foo' }, { name: 'yellow-foo' } ];
  }
});
// END-SNIPPET
