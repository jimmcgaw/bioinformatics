import DNAAlphabet from '../alphabet/DNAAlphabet';
import RNAAlphabet from '../alphabet/RNAAlphabet';

class Sequence {
  constructor(sequenceCharacters, alphabetClass){
    this.setAlphabet(alphabetClass);
    this.sequence = sequenceCharacters.toUpperCase();
    this.characters = this.sequence.split('');
    this.checkCharacters();
  }

  setAlphabet(alphabetClass){
    if (typeof alphabetClass === 'undefined'){
      alphabetClass = DNAAlphabet;
    }
    this.alphabet = new alphabetClass();
  }

  checkCharacters(){
    let alphabetCharacters = this.alphabet.getCharacters();
    this.characters.forEach(character => {
      if (alphabetCharacters.indexOf(character) === -1){
        throw new Error("Character in supplied sequence string is not in target alphabet");
      }
    });
  }

  getAlphabet(){
    return this.alphabet.getCharacters().join('');
  }

  complement(){
    return '';
  }

  transcribe(){
    if (!(this.alphabet instanceof DNAAlphabet)){
      throw new TypeError('Cannot transcribe non-DNA sequence. (Perhaps you want retrotranscribe?)');
    }
    let transcribedSequence = this.sequence.replace(/T/g, 'U');
    console.log(transcribedSequence)
    return new Sequence(transcribedSequence, RNAAlphabet);
  }

  retrotranscribe(){
    if (!(this.alphabet instanceof RNAAlphabet)){
      throw new TypeError('Cannot transcribe non-RNA sequence. (Perhaps you want transcribe?)');
    }
    let retrotranscribedSequence = this.sequence.replace(/U/g, 'T');
    return new Sequence(retrotranscribedSequence, DNAAlphabet);
  }
}

export default Sequence;
