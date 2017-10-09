'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  Vikky Shostak <vikkyshostak@gmail.com>
 *  Copyright (c) 2017 Koddr https://koddr.me
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodbackground.js v2.0.2 at 15/01/2017 (18:35)
 *
 *  Very simple modern JavaScript improver for your background image.
 */

var GoodBackground = function () {
  function GoodBackground() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cover';
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';
    var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no-repeat';

    _classCallCheck(this, GoodBackground);

    this.size = size;
    this.position = position;
    this.repeat = repeat;
  }

  _createClass(GoodBackground, [{
    key: 'make',
    value: function make() {
      var _this = this;

      var elements = document.querySelectorAll('[data-background-image]');

      [].concat(_toConsumableArray(elements)).forEach(function (item) {
        // Background image
        item.style.backgroundImage = 'url(' + item.getAttribute('data-background-image') + ')';
        // Background attachment
        if (item.hasAttribute('data-background-attachment')) {
          item.style.backgroundAttachment = item.getAttribute('data-background-attachment');
        }
        // Background clip
        if (item.hasAttribute('data-background-clip')) {
          item.style.backgroundClip = item.getAttribute('data-background-clip');
        }
        // Background origin
        if (item.hasAttribute('data-background-origin')) {
          item.style.backgroundOrigin = item.getAttribute('data-background-origin');
        }
        // Background color
        if (item.hasAttribute('data-background-color')) {
          item.style.backgroundColor = item.getAttribute('data-background-color');
        }
        // Background position
        if (item.hasAttribute('data-background-position')) {
          item.style.backgroundPosition = item.getAttribute('data-background-position');
        } else {
          item.style.backgroundPosition = _this.position;
        }
        // Background repeat
        if (item.hasAttribute('data-background-repeat')) {
          item.style.backgroundRepeat = item.getAttribute('data-background-repeat');
        } else {
          item.style.backgroundRepeat = _this.repeat;
        }
        // Background size
        if (item.hasAttribute('data-background-size')) {
          item.style.backgroundSize = item.getAttribute('data-background-size');
        } else {
          item.style.backgroundSize = _this.size;
        }
      });
    }
  }]);

  return GoodBackground;
}();

new GoodBackground().make();