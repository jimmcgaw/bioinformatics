import { expect } from 'chai';

import Alphabet from '../../src/alphabet/Alphabet';

describe('Alphabet', function() {
  describe('initializes', function() {
    it('throws an exception if we try to instantiate', function () {
      expect(() => {
        let alphabet = new Alphabet()
      }).to.throw(/"Alphabet" is abstract base class/);
    });
  });

  describe('#name', function() {
    it('throws an exception if we try to call static "name" method', function () {
      expect(() => {
        Alphabet.name();
      }).to.throw(/"Alphabet" is abstract base class/);
    });
  });
});
