import Ember from 'ember';

export default Ember.Controller.extend({
  size: 100,
  radius: Ember.computed('size', function(){
    return this.get('size') / 4;
  })
});
