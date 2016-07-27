import { expect } from 'chai';

import RNAAlphabet from '../../src/alphabet/RNAAlphabet';

describe('RNAAlphabet', function() {
  describe('#name', function() {
    it('returns the static hard-coded name', function () {
      expect(RNAAlphabet.name()).to.equal('RNAAlphabet');
    });
  });
});
