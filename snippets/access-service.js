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
