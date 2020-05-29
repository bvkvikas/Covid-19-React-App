import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../store/actions';

import CountryListComponent from './CountryListComponent';
import FeedComponent from './FeedComponent';
import LogoComponent from './LogoComponent';
import Cards from './Cards/Cards';
import Chart from './Charts/Chart';

import styles from './App.module.css';

class MainDashboardComponent extends PureComponent {
  render() {
    const { cases, totalCases } = this.props;
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <LogoComponent />
            COVID-19
          </Navbar.Brand>
        </Navbar>
        <br />
        {cases.length > 0 ? (
          displayDashboard(cases, totalCases)
        ) : (
          <CircularProgress />
        )}
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

function displayDashboard(cases, totalCases, timeline) {
  return (
    <div className={styles.container}>
      {/* <CountryListComponent data={cases} /> */}
      <Cards data={totalCases} />
      <Chart data={timeline} />
      {/* <FeedComponent /> */}
    </div>
  );
}

MainDashboardComponent.propTypes = {
  cases: PropTypes.instanceOf(Array),
  totalCases: PropTypes.instanceOf(Object)
};

MainDashboardComponent.defaultProps = {
  cases: [],
  totalCases: {}
};

function mapStateToProps(state) {
  return {
    totalCases: state.feedReducers.totalCases,
    cases: state.feedReducers.cases,
    timeline: state.feedReducers.timeline
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboardComponent);
