import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';
import * as actions from '../store/actions';
import CountryListComponent from './List/CountryListComponent';
import LogoComponent from './LogoComponent';
import Cards from './Cards/Cards';
import Chart from './Charts/Chart';

import styles from './App.module.css';

class MainDashboardComponent extends PureComponent {
  render() {
    console.log(this.props);
    const { cases, totalCases } = this.props;
    return (
      <div className={styles.root}>
        <AppBar position='static'>
          <Toolbar>
            <LogoComponent />
            <Typography className={styles.title} variant='h4' noWrap>
              COVID-19 Cases Tracker
            </Typography>
          </Toolbar>
        </AppBar>

        {displayDashboard(cases, totalCases)}
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

function displayDashboard(cases, totalCases) {
  return (
    <div className={styles.main}>
      <div>
        <Grid container className={styles.gridContainer}>
          <Grid item xs={6} sm={2} className={styles.countryList}>
            <CountryListComponent data={cases} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <div className={styles.container}>
              <Cards data={totalCases} />
              <Chart />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

MainDashboardComponent.propTypes = {
  cases: PropTypes.instanceOf(Object),
  totalCases: PropTypes.instanceOf(Object)
};

MainDashboardComponent.defaultProps = {
  cases: {},
  totalCases: {}
};

const mapStateToProps = state => {
  return {
    totalCases: state.feedReducers.totalCases,
    cases: state.feedReducers.cases,
    timeline: state.feedReducers.timeline
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboardComponent);
