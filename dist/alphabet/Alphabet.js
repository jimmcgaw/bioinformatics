'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alphabet = function () {
  _createClass(Alphabet, null, [{
    key: 'name',
    value: function name() {
      // override in the derived class
      throw new TypeError('"Alphabet" is abstract base class');
    }
  }]);

  function Alphabet() {
    _classCallCheck(this, Alphabet);

    if (new.target === Alphabet) {
      throw new TypeError('"Alphabet" is abstract base class');
    }
  }

  _createClass(Alphabet, [{
    key: 'getCharacters',
    value: function getCharacters() {
      // override in derived classes
    }
  }]);

  return Alphabet;
}();

exports.default = Alphabet;