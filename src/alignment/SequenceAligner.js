
import ScoreMatrix from './ScoreMatrix';

// for now, this class will merely take strings, instead of Sequence objects
// just get Needleman-Wunsch algorithm functioning correctly for now.
class SequenceAligner {
  constructor(seq1, seq2){
    if (seq1.length === 0 || seq2.length === 0){
      throw new Error("Cannot construct score matrix if either sequence has zero length");
    }
    this.seq1 = seq1;
    this.seq2 = seq2;

    this.scoreMatrix = new ScoreMatrix(this.seq1, this.seq2);
  }
}

export default SequenceAligner;
