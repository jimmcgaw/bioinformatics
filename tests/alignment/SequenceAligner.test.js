import { expect } from 'chai';

import SequenceAligner from '../../src/alignment/SequenceAligner';

describe('SequenceAligner', function() {
  let aligner,
      seq1 = 'abef',
      seq2 = 'abc';

  describe('initialized with two sequences', function() {
    beforeEach(function () {
      aligner = new SequenceAligner(seq1, seq2);
    });

    it('throws an error if either sequence has zero length', function () {

    });
  });
});
