import axios from 'axios';

async function fetchData(url) {
  const response = await axios.get(
    'https://corona.lmao.ninja/v2/countries?sort=cases'
  );

  console.log(response);
}

export default fetchData;
