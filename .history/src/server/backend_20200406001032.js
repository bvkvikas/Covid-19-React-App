require('dotenv').config({ path: '../../variables.env' });
const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
const axios = require('axios');
const constants = require('./constants');

const app = express();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

const fetchData = url => {
  return axios.get(url);
};

app.use(cors());

function updateData(options) {
  setInterval(() => {
    fetchData(options.url)
      .then(response => {
        pusher.trigger(options.channel, options.event, {
          cases: response.data
        });
      })
      .catch(error => console.log(error));
  }, 120000);
}

app.get('/total_cases', (req, res) => {
  const url = constants.URL.TOTAL_CASES;
  const channel = constants.CHANNELS.TOTAL_CASES;
  const event = constants.EVENTS.UPDATE_TOTAL_CASES;
  const options = { url, channel, event };
  fetchData(url)
    .then(response => {
      console.log(response.data.cases);
      res.json(response.data);
      updateData(options);
    })
    .catch(error => console.log(error));
});

app.get('/all_countries', (req, res) => {
  const url = constants.URL.COUNTRYWISE_CASES;
  const channel = constants.CHANNELS.COUNTRYWISE_CASES;
  const event = constants.EVENTS.UPDATE_COUNTRYWISE_CASES;
  const options = { url, channel, event };
  fetchData(url)
    .then(response => {
      res.json(response.data);
      updateData(options);
    })
    .catch(error => console.log(error));
});
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
