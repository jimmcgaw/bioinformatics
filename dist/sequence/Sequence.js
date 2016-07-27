'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DNAAlphabet = require('../alphabet/DNAAlphabet');

var _DNAAlphabet2 = _interopRequireDefault(_DNAAlphabet);

var _RNAAlphabet = require('../alphabet/RNAAlphabet');

var _RNAAlphabet2 = _interopRequireDefault(_RNAAlphabet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sequence: a string of characters representing a sequence of nucleotides
 * Usage: let sequence = new Sequence('ACCTGG', DNAAlphabet);
 *        let transcribed = sequence.transcribe();
 *        transcribed.sequence;
 *          => 'ACCUGG'
 *        transcribed.getAlphabet();
            => 'ACGU'  // now an RNA strand
 *
 */
var Sequence = function () {
  function Sequence(sequenceCharacters, alphabetClass) {
    _classCallCheck(this, Sequence);

    this._setAlphabet(alphabetClass);
    this.sequence = sequenceCharacters.toUpperCase();
    this.characters = this.sequence.split('');
    this._checkCharacters();
  }

  /**
   * @param {alphabetClass} Name of Alphabet subclass. One of [DNAAlphabet, RNAAlphabet]
   * @return {void}
   */


  _createClass(Sequence, [{
    key: '_setAlphabet',
    value: function _setAlphabet(alphabetClass) {
      if (typeof alphabetClass === 'undefined') {
        alphabetClass = _DNAAlphabet2.default;
      }
      this.alphabet = new alphabetClass();
    }
  }, {
    key: '_checkCharacters',
    value: function _checkCharacters() {
      var alphabetCharacters = this.alphabet.getCharacters();
      this.characters.forEach(function (character) {
        if (alphabetCharacters.indexOf(character) === -1) {
          throw new Error("Character in supplied sequence string is not in target alphabet");
        }
      });
    }

    /**
     * @return {String} string containing distinct characters of the sequence alphabet
     */

  }, {
    key: 'getAlphabet',
    value: function getAlphabet() {
      return this.alphabet.getCharacters().join('');
    }
  }, {
    key: 'complement',
    value: function complement() {
      return '';
    }

    /**
     * @return {Sequence} new sequence object containing the transcribed characters
     */

  }, {
    key: 'transcribe',
    value: function transcribe() {
      if (!(this.alphabet instanceof _DNAAlphabet2.default)) {
        throw new TypeError('Cannot transcribe non-DNA sequence. (Perhaps you want retrotranscribe?)');
      }
      var transcribedSequence = this.sequence.replace(/T/g, 'U');
      console.log(transcribedSequence);
      return new Sequence(transcribedSequence, _RNAAlphabet2.default);
    }

    /**
     * @return {Sequence} new sequence object containing the transcribed characters
     */

  }, {
    key: 'retrotranscribe',
    value: function retrotranscribe() {
      if (!(this.alphabet instanceof _RNAAlphabet2.default)) {
        throw new TypeError('Cannot transcribe non-RNA sequence. (Perhaps you want transcribe?)');
      }
      var retrotranscribedSequence = this.sequence.replace(/U/g, 'T');
      return new Sequence(retrotranscribedSequence, _DNAAlphabet2.default);
    }
  }]);

  return Sequence;
}();

exports.default = Sequence;