import "/src/assets/style.css";
import "/src/assets/scss.scss";

import { getRandomText } from "./client";

function initApp() {
  getRandomText().then(data => {
    console.log(data);
    // renderTextForTyping(data.data.text);
  });
}

initApp();
