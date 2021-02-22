import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { TextProcessor, TextProvider } from "./text";
import { TextRenderer } from "./rendering";

const TEXT_API = "https://fish-text.ru/get?type=paragraph&format=json&number=1";
const textProvider = new TextProvider(TEXT_API);
const textProcessor = new TextProcessor();
const textRenderer = new TextRenderer();

function initApp() {
  document.querySelector(".start-button").addEventListener("click", () => {
    textProvider
      .provideText()
      .then(text => {
        return textProcessor.splitIntoLines(50, text.data.text);
      })
      .then(splitedText => {
        textRenderer.renderText(splitedText);
      });
    removeStartMenu();
  });

  document.addEventListener("keydown", event => {
    if (!checkUserInput(event.key)) {
      return;
    } else {
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
