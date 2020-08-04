const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://chaplin-react.herokuapp.com';

export default {
  URL,
};
