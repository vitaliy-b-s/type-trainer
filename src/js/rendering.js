export class Renderer {
  letters;
  words;
  currentWord;

  renderText(text) {
    const textBox = document.querySelector(".text");

    text.forEach(elem => {
      const line = document.createElement("div");

      line.classList.add("line");

      elem.forEach(elem => {
        const word = document.createElement("div");

        if (elem === "&nbsp;") {
          word.innerHTML = "&nbsp;";
          word.classList.add("letter");
          line.appendChild(word);
          return;
        }

        const letters = elem.split("");

        word.classList.add("word");

        letters.forEach(elem => {
          const letter = document.createElement("div");
          letter.classList.add("letter");
          letter.innerHTML = elem;

          word.appendChild(letter);
        });

        line.appendChild(word);
      });

      textBox.appendChild(line);
    });

    this.letters = document.querySelectorAll(".letter");
    this.words = document.querySelectorAll(".word");
    this.currentWord = this.words[0];
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
    let wordForCheck;
    if (this.letters[currentIndex].parentNode.classList.contains("line")) {
      wordForCheck = this.letters[currentIndex];
    } else {
      wordForCheck = this.letters[currentIndex].parentNode;
    }

    wordForCheck.classList.add("active-word");

    if (this.currentWord === wordForCheck) {
      return;
    } else {
      this.currentWord.classList.remove("active-word");
      this.currentWord = wordForCheck;
    }
  }
}
