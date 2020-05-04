import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import * as actions from '../store/actions';
import CountryListComponent from './CountryListComponent';
import FeedComponent from './FeedComponent';
import LogoComponent from './LogoComponent';
import CountryDataComponent from './countryDataComponent';

class MainDashboardComponent extends PureComponent {
  render() {
    const { cases, totalCases } = this.props;
    return (
      <>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <LogoComponent />
            COVID-19
          </Navbar.Brand>
        </Navbar>
        <div className='container-fluid'>
          <br />
          {cases[0] != null ? (
            displayDashboard(cases, totalCases)
          ) : (
            <CircularProgress />
          )}
        </div>
      </>
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
    <Paper elevation={3}>
      <br />
      <div className='row'>
        <div className='col-md-2'>
          <CountryListComponent data={cases} />
        </div>
        <div className='col-md-7'>
          <CountryDataComponent data={totalCases} />
        </div>

        <div className='col-md-3'>
          <FeedComponent />
        </div>
      </div>
    </Paper>
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

function mapStateToProps(state, ownProps) {
  return {
    totalCases: state.feedReducers.totalCases,
    cases: state.feedReducers.cases
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
