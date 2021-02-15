import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { getRandomText } from "./client";

function initApp() {
  getRandomText().then(data => {
    renderText(splitIntoLines(data, 60));
  });
}

function renderText(text) {}

function splitIntoLines(text, lineWidth) {
  const result = [];
  const words = text.split(" ");
  console.log(text);
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

initApp();
