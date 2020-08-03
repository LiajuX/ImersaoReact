// Receives data
import config from '../config';

const VIDEOS_URL = `${config.URL}/videos`;

function createVideo(videoObject) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  createVideo,
};
