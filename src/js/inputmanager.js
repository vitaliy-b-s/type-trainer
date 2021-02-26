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
    if (key.charCodeAt() === 66 && this.currentIndex === 0) {
      return false;
    } else if (key.charCodeAt() === 66) {
      return true;
    } else if (!this.validation.test(key)) {
      return false;
    } else {
      return true;
    }
  }

  checkForError(key, letters, currentIndex) {
    if (key !== letters[currentIndex].innerHTML) {
      return true;
    }
  }
}
