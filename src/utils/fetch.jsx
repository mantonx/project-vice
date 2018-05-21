import axios from "axios";

const endpoint = 'http://localhost:3000';

const fetchShows = () => {
  return axios.get(`${endpoint}/shows`)
  .then(res => {
    return res.data;
  })
  .catch((res) => {
    console.error(res);
  });
}

export default fetchShows;