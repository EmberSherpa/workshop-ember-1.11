import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  init: function() {
    /**
     * Problem: 'storage' event only fires when value change happens on a different window
     * Solution: "fix" this inside of our service
     */
    window.addEventListener('storage', Ember.run.bind(this, this.callback));
  },
  setItem: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    Ember.run(this, this.callback, {key: key, newValue: value});
  },
  getItem: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  clear: function() {
    localStorage.clear();
  },
  callback: function(event) {
    // notify listeners of change
    this.trigger('change', event.key, event.newValue);
  }
});
