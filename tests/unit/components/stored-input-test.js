import Ember from 'ember';
import {
  moduleForComponent,
  test
  } from 'ember-qunit';

import LocalStorageService from 'workshop-ember-1-11/services/local-storage';

moduleForComponent('stored-input', {
  // specify the other units that are required for this test
  needs: ['service:local-storage'],
  teardown: function() {
    window.localStorage.clear();
  }
});

test('it renders', function (assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('has storage', function (assert) {
  var component = this.subject();

  // storage property is available on the component
  assert.ok(component.storage, "storage injection is available on the component");

  // property is instance of an InjectedProperty
  // @see https://github.com/emberjs/ember.js/blob/master/packages/ember-metal/lib/injected_property.js#L18
  assert.ok(!(component.storage instanceof LocalStorageService), "injected property is not instance of LocalStorageService");

  // get returns instance of the service looked up in the container
  assert.ok(component.get('storage') instanceof LocalStorageService, "component.get returns instance of injected service");
});

test('input field reads value from stored key', function(assert){
  window.localStorage.setItem('foo', `"bar"`);
  var component = this.subject({
    key: 'foo'
  });

  this.render();
  assert.equal(component.get('value'), 'bar', 'bar was retrieved from localStorage');
});

test('input field sets localStorage on focus out', function(assert){
  var component = this.subject({
    key: 'foo'
  });

  this.render();
  this.$().focus();
  Ember.run(()=>{
    component.set('value', 'baz');
  });
  this.$().blur();

  assert.equal(window.localStorage.getItem('foo'), `"baz"`, "the value was updated on focus out");
});

