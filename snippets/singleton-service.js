moduleFor('route:inject-services', {
  // Specify the other units that are required for this test.
  needs: ['controller:inject-services', 'service:local-storage']
});

test('storage service is a singleton', function(assert) {
  var route = this.subject();

  var controller = route.controllerFor('inject-services');

  assert.equal(route.get('storage'), controller.get('storage'), "both route and controller storage have same object");
});
