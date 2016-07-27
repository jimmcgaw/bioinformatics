
// for now, this class will merely take strings, instead of Sequence objects
// just get Needleman-Wunsch algorithm functioning correctly for now.
class SequenceAligner {
  constructor(seq1, seq2){
    this.seq1 = seq1;
    this.seq2 = seq2;

    this.initTable()
  }

  initTable(){
    this.table = [];
    for (let i = 0; i <= this.seq1.length; i++){
      let row = [];
      for (let j = 0; j <= this.seq2.length; j++){
        row.push(0);
      }
      this.table.push(row);
    }
  }
}

export default SequenceAligner;
