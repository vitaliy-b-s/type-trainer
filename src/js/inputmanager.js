export class InputManager {
  currentIndex = 0;
  validation = new RegExp(`[\b?!,-;.а-яА-ЯёЁ" "0-9._]`);

  incrementIndex() {
    this.currentIndex += 1;
  }

  decrementIndex() {
    this.currentIndex -= 1;
  }

  onInput(key) {
    if (
      (key.charCodeAt() === 66 && this.decrementIndex === 0) ||
      !validation.test(key)
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkForEror(key) {}
}
