export class Stats {
  errors = 0;
  spentTime;
  numberOfWrittenLetters;

  countErrors() {
    this.errors++;
  }
}
