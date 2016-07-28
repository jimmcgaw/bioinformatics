"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScoreMatrix = require("./ScoreMatrix");

var _ScoreMatrix2 = _interopRequireDefault(_ScoreMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// for now, this class will merely take strings, instead of Sequence objects
// just get Needleman-Wunsch algorithm functioning correctly for now.
var SequenceAligner = function SequenceAligner(seq1, seq2) {
  _classCallCheck(this, SequenceAligner);

  if (seq1.length === 0 || seq2.length === 0) {
    throw new Error("Cannot construct score matrix if either sequence has zero length");
  }
  this.seq1 = seq1;
  this.seq2 = seq2;

  this.scoreMatrix = new _ScoreMatrix2.default(this.seq1, this.seq2);
};

exports.default = SequenceAligner;