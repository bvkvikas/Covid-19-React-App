require("dotenv").config({ path: "../../variables.env" });
const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const axios = require("axios");
const OAuth = require("oauth");
const { promisify } = require("util");
const constants = require("./constants");

const app = express();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

const fetchData = (url) => {
  return axios.get(url);
};

app.use(cors());

function updateData(options) {
  setInterval(() => {
    fetchData(options.url)
      .then((response) => {
        pusher.trigger(options.channel, options.event, {
          cases: response.data,
        });
      })
      .catch((error) => console.log(error));
  }, 120000);
}

function updateTwitterFeedData(options) {
  setInterval(() => {
    fetchTwitterFeed()
      .then((response) => {
        console.log(response);
        pusher.trigger(options.channel, options.event, {
          feed: response,
        });
      })
      .catch((error) => console.log(error));
  }, 5000);
}

async function fetchTwitterFeed() {
  const oauth = new OAuth.OAuth(
    "https://twitter.com/oauth/request_token",
    "https://twitter.com/oauth/access_token",
    "zCFloLE29Vd1TMqJxXXaRRriE",
    "BJKox9gxzSnmx0pDvB5DNx835Xx4vL9ssqI4lk68l2O3eKFAtr",
    "1.0A",
    "http://localhost:3000/oauth/callback",
    "HMAC-SHA1"
  );
  const get = promisify(oauth.get.bind(oauth));

  const result = await get(
    "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=WHO",
    "345306559-FRfmJ2QZSJoQmjbdugiwxb2dGxXxEqprGHjbSifB",
    "bOUrciPIuYOiHh769ln1oU39aLhkQ55Oc7AfgsFNHslTZ"
  );

  return result;
}

app.get("/total_cases", (req, res) => {
  const url = constants.URL.TOTAL_CASES;
  const channel = constants.CHANNELS.TOTAL_CASES;
  const event = constants.EVENTS.UPDATE_TOTAL_CASES;
  const options = { url, channel, event };
  fetchData(url)
    .then((response) => {
      console.log(response.data.cases);
      res.json(response.data);
      updateData(options);
    })
    .catch((error) => console.log(error));
});

app.get("/all_countries", (req, res) => {
  const url = constants.URL.COUNTRYWISE_CASES;
  const channel = constants.CHANNELS.COUNTRYWISE_CASES;
  const event = constants.EVENTS.UPDATE_COUNTRYWISE_CASES;
  const options = { url, channel, event };
  fetchData(url)
    .then((response) => {
      res.json(response.data);
      updateData(options);
    })
    .catch((error) => console.log(error));
});

app.get("/twitter_test", (req, res) => {
  const url = constants.URL.TWITTER_COVID19;
  const channel = constants.CHANNELS.TWITTER_COVID19;
  const event = constants.EVENTS.UPDATE_TWITTER_COVID19;
  const options = { url, channel, event };
  fetchTwitterFeed().then((response) => {
    res.json(response);
    updateTwitterFeedData(options);
  });
});

app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
  // axios
  //   .get("https://api.twitter.com/1.1/search/tweets.json", {
  //     oauth: {
  //       consumer_key: "zCFloLE29Vd1TMqJxXXaRRriE",
  //       consumer_secret: "BJKox9gxzSnmx0pDvB5DNx835Xx4vL9ssqI4lk68l2O3eKFAtr",
  //       token: "345306559-Aq0K7sAOVH5YPbJO3XlSM4zNtqW9ygXrY8nHONu4",
  //       token_secret: "Ix8Gp5a6awsdzAgmpacARFpf1g8Mo5EMkvjhMsmsaTqCx",
  //     },
  //     qs: { screen_name: "q=covid19" },
  //   })
  //   .then((response) => {
  //     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + response);
  //   })
  //   .catch((error) => console.log(error));
});
