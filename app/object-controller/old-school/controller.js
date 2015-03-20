import Ember from 'ember';

// BEGIN-SNIPPET old-school-controller
export default Ember.ObjectController.extend({
  /**
   * ObjectController is a controller that implements ObjectProxy
   * ObjectProxy proxies properties on the controller to object on content property
   *
   *  this.get('firstName') -> this.get('content.firstName')
   *  this.set('firstName', value) -> this.set('content.firstName', value)
   */
  fullName: Ember.computed('firstName', 'lastName', function(){
    var firstName = this.get('firstName');
    var lastName = this.get('lastName');
    return `${firstName} ${lastName}`;
  })
});
// END-SNIPPET
