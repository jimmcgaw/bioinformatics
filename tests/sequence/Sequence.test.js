import { expect } from 'chai';

import DNAAlphabet from '../../src/alphabet/DNAAlphabet';
import RNAAlphabet from '../../src/alphabet/RNAAlphabet';
import Sequence from '../../src/sequence/Sequence';

describe('Sequence', function() {
  let sequence;

  describe('DNA Sequence', function() {
    let dnaSequenceCharacters = 'AGTACACTGGT';
    beforeEach(function () {
      sequence = new Sequence(dnaSequenceCharacters);
    });

    describe('supplied with invalid characters', function() {
      it('throws an error', function () {
        expect(() => {
          new Sequence('AGT1234');
        }).to.throw(/Character in supplied sequence string is not in target alphabet/);
      });
    });

    describe('#getAlphabet', function() {

      it('gets the alphabet characters of sequence', function () {
        expect(sequence.getAlphabet()).to.equal('ACGT');
      });
    });

    describe('#transcribe', function() {
      it('returns the transcribed string', function () {
        let transcribed = sequence.transcribe();
        expect(transcribed.sequence).to.equal(dnaSequenceCharacters.replace(/T/g, 'U'));
      });
    });

    describe('#retrotranscribe', function() {
      it('raises an exception', function () {
        expect(() => {
          sequence.retrotranscribe();
        }).to.throw(/Cannot transcribe non-RNA sequence. \(Perhaps you want transcribe\?\)/);
      });
    });
  });


  describe('RNA Sequence', function() {
    let rnaSequenceCharacters = 'AGUACACUGGU';

    beforeEach(function () {
      sequence = new Sequence(rnaSequenceCharacters, RNAAlphabet);
    });

    describe('RNA supplied with invalid characters', function() {
      it('throws an error', function () {
        expect(() => {
          new Sequence(rnaSequenceCharacters + '765', RNAAlphabet);
        }).to.throw(/Character in supplied sequence string is not in target alphabet/);
      });
    });

    describe('sets the correct alphabet type', function() {
      it('returns the correct alphabet type', function () {
        expect(sequence.alphabet instanceof RNAAlphabet).to.equal(true);
      });
    });

    describe('#getAlphabet', function() {
      it('gets the alphabet characters of sequence', function () {
        expect(sequence.getAlphabet()).to.equal('ACGU');
      });
    });

    describe('#transcribe', function() {
      it('raises an exception', function () {
        expect(() => {
          sequence.transcribe();
        }).to.throw(/Cannot transcribe non-DNA sequence. \(Perhaps you want retrotranscribe\?\)/);
      });
    });

    describe('#retrotranscribe', function() {
      it('returns the retrotranscribed string', function () {
        let retrotranscribed = sequence.retrotranscribe();
        expect(retrotranscribed.sequence).to.equal(rnaSequenceCharacters.replace(/U/g, 'T'));
      });
    });
  });





});
