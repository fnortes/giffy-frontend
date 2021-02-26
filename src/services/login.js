import { API_URL_HEROKU } from "./settings";

export default function login({ username, password }) {

  return fetch(`${API_URL_HEROKU}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {

      if (!res.ok) throw new Error('Response is NOT ok');

      return res.json();

    })
    .then(res => {

      const { jwt } = res;

      return jwt;

    });

}