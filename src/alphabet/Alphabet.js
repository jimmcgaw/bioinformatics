class Alphabet {
  static name(){
    // override in the derived class
    throw new TypeError('"Alphabet" is abstract base class');
  }

  constructor(){
    if (new.target === Alphabet){
      throw new TypeError('"Alphabet" is abstract base class');
    }
  }

  getCharacters(){
    // override in derived classes
  }
}


export default Alphabet;
