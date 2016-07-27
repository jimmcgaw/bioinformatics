import { expect } from 'chai';

import DNAAlphabet from '../../src/alphabet/DNAAlphabet';

describe('DNAAlphabet', function() {
  describe('#name', function() {
    it('returns the static hard-coded name', function () {
      expect(DNAAlphabet.name()).to.equal('DNAAlphabet');
    });
  });
});
