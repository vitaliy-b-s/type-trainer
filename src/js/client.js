const axios = require("axios");
const TEXT_API = "https://fish-text.ru/get?type=paragraph&format=json&number=1";

export function getRandomText() {
  return axios.get(TEXT_API).then(data => {
    return data.data.text;
  });
}
