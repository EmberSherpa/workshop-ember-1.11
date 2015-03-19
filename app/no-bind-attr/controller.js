import Ember from 'ember';

export default Ember.Controller.extend({
  size: 100,
  color: randomColor(),
  radius: Ember.computed('size', function(){
    return this.get('size') / 4;
  })
});

/**
 * @source http://www.paulirish.com/2009/random-hex-color-code-snippets/
 * @returns {string}
 */
function randomColor() {
  return '#' + (function co(lor){ return (lor +=
      [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length === 6) ?  lor : co(lor); })('');
}
