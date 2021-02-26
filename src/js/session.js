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
      if (key.charCodeAt() === 66) {
        this.inputManager.decrementIndex();
        this.renderer.renderCursor(this.inputManager.currentIndex);
        this.renderer.highliteCurrentWord(this.inputManager.currentIndex);
        this.renderer.stepBack(this.inputManager.currentIndex);
      } else {
        this.inputManager.incrementIndex();
        this.renderer.renderCursor(this.inputManager.currentIndex);
        this.renderer.highliteCurrentWord(this.inputManager.currentIndex);
      }
    } else {
      return;
    }
  }
}
