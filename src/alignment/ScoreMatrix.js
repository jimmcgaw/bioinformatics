class ScoreMatrix {
  constructor(sequence1, sequence2){
    if (sequence1.length === 0 || sequence2.length === 0){
      throw new Error("Cannot construct score matrix if either sequence has zero length");
    }
    this.seq1 = sequence1;
    this.seq2 = sequence2;

    this.matrix = [];
    this.arrows = [];

    this._initMatrix();
  }

  _initMatrix(){
    let matrixPadding = 2;

    for (let i = 0; i < this.seq1.length + matrixPadding; i++){
      let row = [];
      for (let j = 0; j < this.seq2.length + matrixPadding; j++){
        row.push(0);
      }
      this.matrix.push(row);
    }

    this.matrix[0][0] = '';
    this.matrix[0][1] = '-';
    this.matrix[1][0] = '-';

    // set row headers to seq1 characters
    this.seq1.split('').forEach((character, index) => {
      this.matrix[index + matrixPadding][0] = character;
    });

    // set column headers to seq2 characters
    this.seq2.split('').forEach((character, index) => {
      this.matrix[0][index + matrixPadding] = character;
    });

    // initialize first row values
    for (let i = 2; i < this.columnCount(); i++){
      this.matrix[1][i] = this.matrix[1][i-1]-1;
    }

    // initialize first column values
    for (let i = 2; i < this.rowCount(); i++){
      this.matrix[i][1] = this.matrix[i-1][1]-1;
    }

  }

  columnCount(){
    return this.matrix[0].length;
  }

  rowCount(){
    return this.matrix.length;
  }
}

export default ScoreMatrix;
