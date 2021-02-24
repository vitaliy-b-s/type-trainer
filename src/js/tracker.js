export class Tracker {
  constructor(currentIndex) {
    this.currentIndex = currentIndex;
  }

  incrementIndex() {
    this.currentIndex += 1;
  }

  decrementIndex() {
    this.currentIndex -= 1;
  }
}
