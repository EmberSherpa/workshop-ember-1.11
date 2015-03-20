import Ember from 'ember';

// BEGIN-SNIPPET new-shiny-controller
export default Ember.Controller.extend({
  /**
   * Explicitly reference properties on model object
   */
  fullName: Ember.computed('model.firstName', 'model.lastName', function(){
    var firstName = this.get('model.firstName');
    var lastName = this.get('model.lastName');
    return `${firstName} ${lastName}`;
  })
});
// END-SNIPPET
