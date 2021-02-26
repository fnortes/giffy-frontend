import { API_URL_HEROKU } from "./settings";

export default function addFav({ id, jwt }) {

  return fetch(`${API_URL_HEROKU}/favs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify({ id })
  })
    .then(res => {

      if (!res.ok) throw new Error('Response is NOT ok');

      return res.json();

    })
    .then(res => {

      const { favs } = res;

      return favs;

    });

}