import { API_URL_HEROKU } from "./settings";

export default function register({ username, password }) {

  return fetch(`${API_URL_HEROKU}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {

      if (!res.ok) throw new Error('Response is NOT ok');

      return true;

    });

}