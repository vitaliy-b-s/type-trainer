const axios = require("axios");

export class TextProvider {
  constructor(URL) {
    this.URL = URL;
  }

  provideText() {
    return axios.get(this.URL);
  }
}

export class TextProcessor {
  splitIntoLines(maxSizeInletters, text) {
    const result = [];
    const words = text.split(" ");
    let intermediateSize = 0;
    const line = [];

    for (const word of words) {
      intermediateSize += word.length + 1;
      if (intermediateSize > maxSizeInletters) {
        intermediateSize = 0;
        result.push(line.slice());
        line.length = 0;
      }
      line.push(word);
      line.push(" ");
    }
    result.push(line.slice());
    return result;
  }
}
