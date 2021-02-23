export class Renderer {
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
  }
}
