import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { settings } from "./data";

import { getRandomText } from "./client";

function initApp() {
  getRandomText()
    .then(data => {
      renderText(splitIntoLines(data, 50));
    })
    .then(() => {
      startSession();
    });
  document.addEventListener("keydown", event => {
    checkUserInput(event.key);
  });
}

function renderText(text) {
  let letterIndex = 0;
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
        letter.setAttribute("data-id", `${letterIndex}`);

        letter.innerHTML = elem;

        word.appendChild(letter);
        letterIndex++;
      });
      space.setAttribute("data-id", `${letterIndex}`);
      letterIndex++;
      word.appendChild(space);
      line.appendChild(word);
    });

    textBox.appendChild(line);
  });
}

function splitIntoLines(text, lineWidth) {
  const result = [];
  const words = text.split(" ");
  let intermediateSize = 0;
  const line = [];

  for (const word of words) {
    intermediateSize += word.length + 1;
    if (intermediateSize > lineWidth) {
      intermediateSize = 0;
      result.push(line.slice());
      line.length = 0;
    }
    line.push(word);
  }
  result.push(line.slice());
  return result;
}

function startSession() {
  document.querySelectorAll(".letter")[0].classList.add("active");
}

function checkUserInput(character) {
  const validation = new RegExp(`^[?!,-;.а-яА-ЯёЁ" "0-9]+$`);
  const currentLetter = document.querySelector(`[data-id="${settings.currentIndex}"]`);
  if (!validation.test(character)) {
    return;
  }

  if (character.charCodeAt() === 32 && currentLetter.innerHTML === "&nbsp;") {
    moveCursor(currentLetter);
    settings.currentIndex++;
    return;
  }

  if (currentLetter.innerHTML === character) {
    moveCursor(currentLetter);
    settings.currentIndex += 1;
  } else {
    catchError(currentLetter);
    settings.currentIndex += 1;
  }
}
function moveCursor(letter) {
  letter.classList.remove("active");
  letter.classList.add("completed");
  document
    .querySelector(`[data-id="${settings.currentIndex + 1}"]`)
    .classList.add("active");
}

function catchError(letter) {
  letter.classList.remove("active");
  letter.classList.add("error");
  document
    .querySelector(`[data-id="${settings.currentIndex + 1}"]`)
    .classList.add("active");
}

initApp();
