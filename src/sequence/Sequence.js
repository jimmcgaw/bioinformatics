import DNAAlphabet from '../alphabet/DNAAlphabet';
import RNAAlphabet from '../alphabet/RNAAlphabet';

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
class Sequence {
  constructor(sequenceCharacters, alphabetClass){
    this._setAlphabet(alphabetClass);
    this.sequence = sequenceCharacters.toUpperCase();
    this.characters = this.sequence.split('');
    this._checkCharacters();
  }

  /**
   * @param {alphabetClass} Name of Alphabet subclass. One of [DNAAlphabet, RNAAlphabet]
   * @return {void}
   */
  _setAlphabet(alphabetClass){
    if (typeof alphabetClass === 'undefined'){
      alphabetClass = DNAAlphabet;
    }
    this.alphabet = new alphabetClass();
  }

  _checkCharacters(){
    let alphabetCharacters = this.alphabet.getCharacters();
    this.characters.forEach(character => {
      if (alphabetCharacters.indexOf(character) === -1){
        throw new Error("Character in supplied sequence string is not in target alphabet");
      }
    });
  }

  /**
   * @return {String} string containing distinct characters of the sequence alphabet
   */
  getAlphabet(){
    return this.alphabet.getCharacters().join('');
  }

  complement(){
    return '';
  }

  /**
   * @return {Sequence} new sequence object containing the transcribed characters
   */
  transcribe(){
    if (!(this.alphabet instanceof DNAAlphabet)){
      throw new TypeError('Cannot transcribe non-DNA sequence. (Perhaps you want retrotranscribe?)');
    }
    let transcribedSequence = this.sequence.replace(/T/g, 'U');
    console.log(transcribedSequence)
    return new Sequence(transcribedSequence, RNAAlphabet);
  }

  /**
   * @return {Sequence} new sequence object containing the transcribed characters
   */
  retrotranscribe(){
    if (!(this.alphabet instanceof RNAAlphabet)){
      throw new TypeError('Cannot transcribe non-RNA sequence. (Perhaps you want transcribe?)');
    }
    let retrotranscribedSequence = this.sequence.replace(/U/g, 'T');
    return new Sequence(retrotranscribedSequence, DNAAlphabet);
  }
}

export default Sequence;
