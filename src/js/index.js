import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { TextProcessor, TextProvider } from "./text";
import { Renderer } from "./rendering";
import { InputManager } from "./inputManager";

const textProvider = new TextProvider();
const textProcessor = new TextProcessor();
const renderer = new Renderer();
const inputManager = new InputManager();

function initApp() {
  document.querySelector(".start-button").addEventListener("click", () => {
    textProvider
      .provideText()
      .then(text => {
        return textProcessor.splitIntoLines(50, text.data.text);
      })
      .then(splitedText => {
        return renderer.renderText(splitedText);
      })
      .then(() => {
        removeStartMenu();
        renderer.highliteCurrentWord(inputManager.currentIndex);
        renderer.renderCursor(inputManager.currentIndex);
      });
  });

  document.addEventListener("keydown", event => {
    inputManager.onInput(event.key);
  });
}

function removeStartMenu() {
  document.querySelector(".start-menu").style = "display: none";
}

initApp();
