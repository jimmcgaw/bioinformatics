import Alphabet from './Alphabet';

class DNAAlphabet extends Alphabet {
  static name(){
    return 'DNAAlphabet';
  }

  constructor(){
    super();
    this.characters = ['A', 'C', 'G', 'T'];
  }

  getCharacters(){
    return this.characters;
  }
}

export default DNAAlphabet;
