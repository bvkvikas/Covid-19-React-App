const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST'
};

const URL = {
  COUNTRYWISE_CASES: 'https://corona.lmao.ninja/countries',
  COUNTRY: 'https://corona.lmao.ninja/',
  TOTAL_CASES: 'https://corona.lmao.ninja/all',
  US_STATES: 'https://corona.lmao.ninja/states',
  MAP_DATA: 'https://corona.lmao.ninja/jhucsse',
  HISTORICAL_DATA: 'https://corona.lmao.ninja/v2/historical'
};

const CHANNELS = {
  TOTAL_CASES: 'all-cases',
  COUNTRYWISE_CASES: 'countrywise-cases'
};

const BACKEND_URL = {
  TOTAL_CASES: 'http://localhost:5000/total_cases',
  COUNTRYWISE_CASES: 'http://localhost:5000/all_countries'
};

const EVENTS = {
  UPDATE_TOTAL_CASES: 'update-total-cases',
  UPDATE_COUNTRYWISE_CASES: 'update-countrywise-cases'
};

module.exports = {
  REQUEST_TYPE,
  URL,
  CHANNELS,
  BACKEND_URL,
  EVENTS
};
