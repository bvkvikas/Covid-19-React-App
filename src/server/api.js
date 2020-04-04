import axios from 'axios';

export async function fetchData(url) {
  return await axios.get(url);
}
