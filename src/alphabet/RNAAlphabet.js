import Alphabet from './Alphabet';

class RNAAlphabet extends Alphabet {
  static name(){
    return 'RNAAlphabet';
  }

  constructor(){
    super();

    this.characters = ['A', 'C', 'G', 'U'];
  }

  getCharacters(){
    return this.characters;
  }
}

export default RNAAlphabet;
