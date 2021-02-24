export class Renderer {
  letters;
  words;
  wordBorders;

  renderText(text) {
    const textBox = document.querySelector(".text");

    text.forEach(elem => {
      const line = document.createElement("div");

      line.classList.add("line");

      elem.forEach(elem => {
        const word = document.createElement("div");
        const letters = elem.split("");
        const space = document.createElement("div");
        space.innerHTML = "&nbsp;";

        word.classList.add("word");

        letters.forEach(elem => {
          const letter = document.createElement("div");
          letter.classList.add("letter");
          letter.innerHTML = elem;

          word.appendChild(letter);
        });

        word.appendChild(space);
        line.appendChild(word);
      });

      textBox.appendChild(line);
    });

    this.letters = document.querySelectorAll(".letter");
    this.words = Array.from(document.querySelectorAll(".word"));
  }

  renderCursor(currentIndex) {
    if (currentIndex === 0) {
      this.letters[currentIndex].classList.add("active-letter");
      this.letters[currentIndex + 1].classList.remove("active-letter");
    } else if (currentIndex === this.letters.length - 1) {
      this.letters[currentIndex - 1].classList.remove("active-letter");
      this.letters[currentIndex].classList.add("active-letter");
    } else {
      this.letters[currentIndex - 1].classList.remove("active-letter");
      this.letters[currentIndex].classList.add("active-letter");
      this.letters[currentIndex + 1].classList.remove("active-letter");
    }
  }

  highliteCurrentWord(currentIndex) {
    const currentWord = this.letters[currentIndex].parentNode;

    if (!currentWord.nextSibling && !currentWord.previousSibling) {
      currentWord.classList.add("active-word");
      currentWord.previousSibling.classList.remove("active-word");
      currentWord.nextSibling.classList.remove("active-word");
      console.log(1);
    } else if (currentWord.nextSibling == null && currentWord.previousSibling) {
      currentWord.classList.add("active-word");
    } else {
      currentWord.classList.add("active-word");
      currentWord.nextSibling.classList.remove("active-word");
      console.log();
    }
  }
}
