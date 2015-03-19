import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    shuffleModel: function() {
      var model = this.get('model');
      model.setObjects(shuffle(model));
    }
  },
  list: Ember.computed('model.@each', function(){
    return this.get('model').join(', ');
  })
});

/**
 * @source http://stackoverflow.com/a/2450976
 * @param array
 * @returns {*}
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
