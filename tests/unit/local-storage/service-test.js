import Ember from 'ember';

import {
  moduleFor,
  test
} from 'ember-qunit';

var localStorage = window.localStorage;

moduleFor('service:local-storage', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  teardown: function() {
    localStorage.clear();
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('addItem stores value in localStorage', function(assert){
  var subject = this.subject();

  assert.ok(subject.setItem, "setItem method exists");
  subject.setItem('foo', 'bar');
  assert.equal(localStorage['foo'], `"bar"`, "bar is retrieved from localStorage");

  subject.setItem('baz', { foo: 'bar' });
  assert.equal(localStorage['baz'], `{"foo":"bar"}`, "object is stored as string");
});

test('getItem retrieves value from localStorage', function(assert){
  var subject = this.subject();

  assert.ok(subject.getItem, "getItem method exists");
  subject.setItem('foo', 'bar');
  assert.equal(subject.getItem('foo'), 'bar');

  assert.equal(subject.getItem('boo'), undefined, "trying to retrieve value that's not set returns undefined");

  subject.setItem('bar', {bar: 'foo'});
  assert.deepEqual(subject.getItem('bar'), {bar: 'foo'}, "deserealized object is retrieved");
});

test('clear deletes all localStorage content', function(assert){
  var subject = this.subject();

  subject.setItem('foo', 'bar');
  subject.setItem('bar', 'baz');

  assert.equal(subject.getItem('foo'), 'bar');
  assert.equal(subject.getItem('bar'), 'baz');

  subject.clear();

  assert.equal(subject.getItem('foo'), undefined, "after clear foo is undefined");
  assert.equal(subject.getItem('bar'), undefined, "after clear baz is undefined");
});

test('fires an event when stored value changes', function(assert){
  var called = 0;

  var subject = this.subject({
    callback: function(event) {
      called++;
    }
  });

  subject.setItem('foo', 'bar');
  subject.setItem('foo', 'baz');

  assert.equal(called, 2, "update was called twice");
});

test('calling get on service returns localStorage value', function(assert){
  localStorage.setItem('foo', `"baz"`);

  var subject = this.subject();
  assert.equal(subject.get('foo'), 'baz', "value retrieved with get is bar");
});

test('use set to store value to localStorage', function(assert){
  var subject = this.subject();
  Ember.run(function(){
    subject.set('foo-bar', 'baz');
  });
  assert.equal(subject.get('foo-bar'), 'baz', "value was set to baz");
});

test('key on storage can be observed', function(assert){
  var called = 0;
  var subject = this.subject();

  Ember.addObserver(subject, 'foo-baz', function(){
    called++;
  });

  Ember.run(function(){
    subject.set('foo-baz', 'bar');
    subject.set('foo-baz', 'woot');
  });

  assert.equal(subject.get('foo-baz'), 'woot', "last value is used");
  assert.equal(called, 2, "observer was fired twice");
});

test('key on storage can be bound', function(assert){
  var subject = this.subject();
  var obj = Ember.Object.extend({
    storage: subject,
    foo: Ember.computed.alias('storage.foo')
  }).create();

  assert.equal(obj.get('foo'), undefined, "foo is undefined");
  Ember.run(function(){
    subject.set('foo', 'bar');
  });
  assert.equal(obj.get('foo'), 'bar', "bar retrieved from aliased property");
});
