// BEGIN-SNIPPET stored-input-component
import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Inject local-storage on storage property
   */
  storage: Ember.inject.service('local-storage'),

  // END-SNIPPET
  tagName: 'input',
  type: 'text',
  attributeBindings: ['value', 'type'],
  /**
   * Key where value is stored
   */
  key: null,
  value: "",
  focusOut: function() {
    // on focusOut store value
    var storage = this.get('storage');
    var key = this.get('key');
    if (key) {
      storage.setItem(key, this.get('value'));
    }
  },
  change: function() {
    // when element value changes update component value property
    this.set('value', this.element.value);
  },
  setValueFromStorage: function() {
    // didInsertElement set component value to value from storage
    var storage = this.get('storage');
    var key = this.get('key');
    if (key) {
      this.set('value', storage.getItem(key));
    }
  }.on('didInsertElement')
});
