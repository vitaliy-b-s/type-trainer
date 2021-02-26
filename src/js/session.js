export class Session {
  constructor(renderer, inputManager, stats) {
    this.renderer = renderer;
    this.inputManager = inputManager;
    this.stats = stats;
  }

  onInput(key) {
    if (this.inputManager.onInput(key)) {
      if (
        this.inputManager.checkForError(
          key,
          this.renderer.letters,
          this.inputManager.currentIndex
        )
      ) {
        this.stats.countErrors();
        this.renderer.rendererError(this.inputManager.currentIndex);
      }
      //   this.stats.countAccuracy();
      this.inputManager.incrementIndex();
      this.renderer.renderCursor(this.inputManager.currentIndex);
      this.renderer.highliteCurrentWord(this.inputManager.currentIndex);

      //   this.renderer.renderStats();
    } else {
      return;
    }
  }

  countSpeed() {}

  setTimer() {}
}
