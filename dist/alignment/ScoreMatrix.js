'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoreMatrix = function () {
  function ScoreMatrix(sequence1, sequence2) {
    _classCallCheck(this, ScoreMatrix);

    if (sequence1.length === 0 || sequence2.length === 0) {
      throw new Error("Cannot construct score matrix if either sequence has zero length");
    }
    this.seq1 = sequence1;
    this.seq2 = sequence2;

    this.matrix = [];
    this.arrows = [];

    this._initMatrix();
  }

  _createClass(ScoreMatrix, [{
    key: '_initMatrix',
    value: function _initMatrix() {
      var _this = this;

      var matrixPadding = 2;

      for (var i = 0; i < this.seq1.length + matrixPadding; i++) {
        var row = [];
        for (var j = 0; j < this.seq2.length + matrixPadding; j++) {
          row.push(0);
        }
        this.matrix.push(row);
      }

      this.matrix[0][0] = '';
      this.matrix[0][1] = '-';
      this.matrix[1][0] = '-';

      // set row headers to seq1 characters
      this.seq1.split('').forEach(function (character, index) {
        _this.matrix[index + matrixPadding][0] = character;
      });

      // set column headers to seq2 characters
      this.seq2.split('').forEach(function (character, index) {
        _this.matrix[0][index + matrixPadding] = character;
      });

      // initialize first row values
      for (var _i = 2; _i < this.columnCount(); _i++) {
        this.matrix[1][_i] = this.matrix[1][_i - 1] - 1;
      }

      // initialize first column values
      for (var _i2 = 2; _i2 < this.rowCount(); _i2++) {
        this.matrix[_i2][1] = this.matrix[_i2 - 1][1] - 1;
      }
    }
  }, {
    key: 'columnCount',
    value: function columnCount() {
      return this.matrix[0].length;
    }
  }, {
    key: 'rowCount',
    value: function rowCount() {
      return this.matrix.length;
    }
  }]);

  return ScoreMatrix;
}();

exports.default = ScoreMatrix;