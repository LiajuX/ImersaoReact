// Send data
import config from '../config';

const CATEGORIES_URL = `${config.URL}/categories`;

// Function to get all categories
function getAll() {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getCategoriesAndVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAll,
  getCategoriesAndVideos,
};
