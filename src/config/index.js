const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://aluraflix-liajux.herokuapp.com';

export default {
  URL,
};
