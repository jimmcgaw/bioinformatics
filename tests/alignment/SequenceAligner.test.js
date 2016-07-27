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

    it('initTable', function () {
      aligner.initTable();
      expect(aligner.table.length).to.equal(seq1.length+1);
      expect(aligner.table[0].length).to.equal(seq2.length+1);
    });
  });
});
