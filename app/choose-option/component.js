import Ember from 'ember';

export default Ember.Component.extend({
  // array or options to show
  options: [],
  // original option
  original: null,
  // current option
  current: Ember.computed.oneWay('original'),
  actions: {
    setCurrent(option) {
      this.set('current', option);
    }
  }
});
