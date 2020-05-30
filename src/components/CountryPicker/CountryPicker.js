import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';
import * as action from '../../store/actions';

import styles from './CountryPicker.module.css';

class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { country: 'Global' };
  }

  handleChange = event => {
    this.setState({ country: event.target.value });
    this.updateData(event.target.value);
  };

  updateData = country => {
    const { actions } = this.props;
    actions.getSpecificCountryCases(country);
    actions.getTimeLine(country);
  };

  render() {
    const { data } = this.props;
    const { country } = this.state;
    return (
      <FormControl className={styles.main}>
        <InputLabel>Select a country</InputLabel>
        <Select onChange={this.handleChange} value={country}>
          <MenuItem value='Global'>
            <em>Global</em>
          </MenuItem>
          {data.map(row => (
            <MenuItem key={row.countryName} value={row.countryName}>
              {row.countryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = state => {
  return {
    // cases: state.feedReducers.cases
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(action, dispatch)
  };
};
CountryPicker.defaultProps = {
  cases: []
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);
