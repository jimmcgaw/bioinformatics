'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Alphabet2 = require('./Alphabet');

var _Alphabet3 = _interopRequireDefault(_Alphabet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DNAAlphabet = function (_Alphabet) {
  _inherits(DNAAlphabet, _Alphabet);

  _createClass(DNAAlphabet, null, [{
    key: 'name',
    value: function name() {
      return 'DNAAlphabet';
    }
  }]);

  function DNAAlphabet() {
    _classCallCheck(this, DNAAlphabet);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DNAAlphabet).call(this));

    _this.characters = ['A', 'C', 'G', 'T'];
    return _this;
  }

  _createClass(DNAAlphabet, [{
    key: 'getCharacters',
    value: function getCharacters() {
      return this.characters;
    }
  }, {
    key: 'getComplementHash',
    value: function getComplementHash() {
      return {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
      };
    }
  }]);

  return DNAAlphabet;
}(_Alphabet3.default);

exports.default = DNAAlphabet;