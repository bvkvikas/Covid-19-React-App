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
  HISTORICAL_DATA: 'https://corona.lmao.ninja/v2/historical',
  TWITTER_REQ_TOKEN_URL: 'https://twitter.com/oauth/request_token',
  TWITTER_ACCESS_TOKEN_URL: 'https://twitter.com/oauth/access_token',
  OAUTH_URL: 'http://localhost:3000/oauth/callback',
  TWITTER_API_WHO:
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=WHO',
  TWITTER_ACC_KEY: 'zCFloLE29Vd1TMqJxXXaRRriE',
  TWITTER_SEC_KEY: 'BJKox9gxzSnmx0pDvB5DNx835Xx4vL9ssqI4lk68l2O3eKFAtr',
  OAUTH: '1.0A',
  SHA_CONFIG: 'HMAC-SHA1',
  API_KEY: '345306559-Y1ULoSZxuYffIalfOcePIBx5SgyOAJhBFang80tm',
  API_S_KEY: 'gde5l43aLcWsOYNkm6kNHQtEM3S0Ex7Jtr3Gl5Nnpk8uD'
};

const CHANNELS = {
  TOTAL_CASES: 'all-cases',
  COUNTRYWISE_CASES: 'countrywise-cases',
  TWITTER_FEED: 'twitter_feed'
};

const BACKEND_URL = {
  TWITTER_FEED: 'http://localhost:5000/twitter_test',
  TOTAL_CASES: 'http://localhost:5000/total_cases',
  COUNTRYWISE_CASES: 'http://localhost:5000/all_countries'
};

const EVENTS = {
  UPDATE_TOTAL_CASES: 'update-total-cases',
  UPDATE_COUNTRYWISE_CASES: 'update-countrywise-cases',
  UPDATE_TWITTER_FEED: 'update-twitter_feed'
};

module.exports = {
  REQUEST_TYPE,
  URL,
  CHANNELS,
  BACKEND_URL,
  EVENTS
};
