require('dotenv').config({ path: '../../variables.env' });
const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
const axios = require('axios');
const _ = require('lodash');
const constants = require('./constants');

const app = express();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

async function fetchData() {
  const response = await axios.get(
    'https://corona.lmao.ninja/v2/historical/India?lastdays=150'
  );
  // const {
  //   data: { country, cases, todayCases, deaths, recovered, active }
  // } = response;
  // console.log(response);
  // console.log(`${country} : ${cases}`);
  // response.data.map(row => console.log(row.country));

  return response;
}

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

app.get('/test', (req, res) => {
  fetchData()
    .then(response => {
      console.log('Cases');
      const { timeline } = response.data;
      const { cases, deaths, recovered } = timeline;
      const modifiedData = [];
      console.log('Cases');
      _.forOwn(cases, function (num, key) {
        const reportDate = {
          reportDate: key,
          confirmed: num
        };
        modifiedData.push(reportDate);
      });
      console.log('Deaths');
      _.forOwn(deaths, function (num, key) {
        const json = _.find(modifiedData, { reportDate: key });
        json.deaths = num;
        modifiedData.push(json);
      });
      console.log('Recovered');
      _.forOwn(recovered, function (num, key) {
        const json = _.find(modifiedData, { reportDate: key });
        json.recovered = num;
        modifiedData.push(json);
      });
      res.json(modifiedData);
    })
    .catch(error => console.log(error));
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
