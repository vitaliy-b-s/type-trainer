import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { TextProcessor, TextProvider } from "./text";
import { Renderer } from "./rendering";
import { Tracker } from "./tracker";

const textProvider = new TextProvider();
const textProcessor = new TextProcessor();
const renderer = new Renderer();

function initApp() {
  document.querySelector(".start-button").addEventListener("click", () => {
    textProvider
      .provideText()
      .then(text => {
        return textProcessor.splitIntoLines(50, text.data.text);
      })
      .then(splitedText => {
        renderer.renderText(splitedText);
      });
    removeStartMenu();
  });

  document.addEventListener("keydown", event => {
    if (!checkUserInput(event.key)) {
      return;
    } else if (event.key.charCodeAt() === 66) {
      return;
    } else {
      console.log(event.key);
    }
  });
}

function removeStartMenu() {
  document.querySelector(".start-menu").style = "display: none";
}

function checkUserInput(character) {
  const validation = new RegExp(`[\b?!,-;.а-яА-ЯёЁ" "0-9._]`);

  if (character.charCodeAt() === 66) {
    return true;
  } else if (!validation.test(character)) {
    return false;
  } else {
    return true;
  }
}

initApp();
