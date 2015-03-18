import Ember from 'ember';

export default Ember.Controller.extend({
  backgroundColor: randomColor(),
  actions: {
    changeColor: function() {
      this.set('backgroundColor', randomColor());
    }
  },
  isDark: Ember.computed('backgroundColor', function(){
    return isDark(this.get('backgroundColor'));
  }),
  inverseColor: Ember.computed('backgroundColor', function(){
    return inverseColor(this.get('backgroundColor'));
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

/**
 * @source http://stackoverflow.com/a/12043228
 * @param color {string}
 * @returns {number}
 */
function isDark(color) {
  var c = color.substring(1);      // strip #
  return parseInt(c, 16) > 0xffffff/2;
}

/**
 * @source http://jsperf.com/inverse-hex-colours
 * @param color
 * @returns {*}
 */
function inverseColor(color) {
  function inverse(hex) {
    if (hex.length !== 7 || hex.indexOf('#') !== 0) {
      return null;
    }
    var r = (255 - parseInt(hex.substring(1, 3), 16)).toString(16);
    var g = (255 - parseInt(hex.substring(3, 5), 16)).toString(16);
    var b = (255 - parseInt(hex.substring(5, 7), 16)).toString(16);
    return  "#" + pad(r) + pad(g) + pad(b);
  }

  function pad(num) {
    if (num.length < 2) {
      return "0" + num;
    } else {
      return num;
    }
  }
  return inverse(color);
}
