import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Pusher from 'pusher-js';
import dotenv from 'dotenv';
import _ from 'lodash';
import CountryListComponent from './CountryListComponent';
import DataDisplayComponent from './DataDisplayComponent';
import FeedComponent from './FeedComponent';
import LogoComponent from './LogoComponent';
import { EVENTS, CHANNELS, BACKEND_URL } from '../server/constants';

class MainDashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCases: {},
      cases: []
    };
  }

  componentDidMount() {
    const pusher = createPusher();

    // ALL CASES DATA FETCH

    this.fetchData(
      BACKEND_URL.TOTAL_CASES,
      'totalCases',
      CHANNELS.TOTAL_CASES,
      EVENTS.UPDATE_TOTAL_CASES,
      pusher
    );

    // Countrywise CASES DATA FETCH
    this.fetchData(
      BACKEND_URL.COUNTRYWISE_CASES,
      'cases',
      CHANNELS.COUNTRYWISE_CASES,
      EVENTS.UPDATE_COUNTRYWISE_CASES,
      pusher
    );
  }

  fetchData = (url, propToUpdate, channelName, eventName, pusher) => {
    // CASES BY COUNTRY DATA FETCH
    fetch(url)
      .then(response => response.json())
      .then(countryCount => {
        this.setState({
          [propToUpdate]: countryCount
        });

        const channel = createChannel(channelName, pusher);

        channel.bind(eventName, response => {
          this.setState({
            [propToUpdate]: response
          });
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { cases, totalCases } = this.state;
    console.log(totalCases.cases);
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <LogoComponent />
            COVID-19
          </Navbar.Brand>
        </Navbar>
        <div className="container-fluid">
          <br />
          {cases != null ? (
            displayDashboard(cases, totalCases)
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    );
  }
}

MainDashboardComponent.propTypes = {
  // cases: PropTypes.number,
};

MainDashboardComponent.defaultProps = {
  cases: 0
};

/// CHANGE THE APP KEY TO YOURS BEFORE RUNNING
function createPusher() {
  return new Pusher('YOUR PUSHER APP KEY - PUSHER_APP_KEY', {
    cluster: 'us2',
    encrypted: true
  });
}

function createChannel(channelName, pusher) {
  return pusher.subscribe(channelName);
}

function displayDashboard(cases, totalCases) {
  return (
    <Paper elevation={3}>
      <br />
      <div className="row">
        <div className="col-md-2">
          <CountryListComponent data={cases} />
        </div>
        <div className="col-md-7">
          <DataDisplayComponent data={totalCases} />
        </div>

        <div className="col-md-3">
          <FeedComponent />
        </div>
      </div>
    </Paper>
  );
}

export default MainDashboardComponent;
