import { expect } from 'chai';

import ScoreMatrix from '../../src/alignment/ScoreMatrix';

describe('ScoreMatrix', function() {
  let scoreMatrix,
      sequence1 = 'ACAATCC',
      sequence2 = 'AGCATGC';

  beforeEach(function () {
    scoreMatrix = new ScoreMatrix(sequence1, sequence2);
  });

  describe('_initMatrix', function() {

    it('throws an exception if either sequence is empty', function () {
      expect(() => {
        new ScoreMatrix('', 'C');
      }).to.throw(/Cannot construct score matrix if either sequence has zero length/);

      expect(() => {
        new ScoreMatrix('C', '');
      }).to.throw(/Cannot construct score matrix if either sequence has zero length/);
    });

    it('builds the score matrix with empty zero values', function () {
      console.log(scoreMatrix.matrix);
    });
  });

});
