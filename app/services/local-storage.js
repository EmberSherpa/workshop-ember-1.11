import Ember from 'ember';

export default Ember.Service.extend({
  setItem: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  clear: function() {
    localStorage.clear();
  }
});
