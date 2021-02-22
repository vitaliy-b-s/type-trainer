class TextProvider {
  constructor(URL) {
    this.URL = URL;
  }

  provideText() {
    return fetch(this.URL);
  }
}

const text = new TextProvider("Нужный URL");

class TextProcessor {
  constructor(text) {
    this.text = text;
  }

  proceedText() {
    return "Текст нарезанный на строки и слова";
  }
}

const splitedText = new TextProcessor(text.provideText);

class TextRenderer {
    constructor (splitedText) {
        this.splitedText= splitedText
    }

    renderText () {
        render splitedText
    }
}


class IndexSearch {
  constructor (text) {
    this.text = text
  }

  getCurrentIndex() {
    return currentIndex
  }
}

const index = new IndexSearch (splitedText.proceedText)

