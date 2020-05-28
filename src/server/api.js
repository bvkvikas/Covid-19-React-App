import axios from 'axios';

async function fetchData(url) {
  const response = await axios.get(
    'https://corona.lmao.ninja/v2/countries?sort=cases'
  );
  const {
    data: { country, cases, todayCases, deaths, recovered, active }
  } = response;
  console.log(`${country} : ${cases}`);
}

export default fetchData;
