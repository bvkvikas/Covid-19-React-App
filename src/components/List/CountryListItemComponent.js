import React, { Component } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../store/actions';

class CountryListItemComponent extends Component {
  componentDidMount() {}

  onSelectCountry = countryName => {
    const { actions } = this.props;
    actions.getSpecificCountryCases(countryName);
    actions.getTimeLine(countryName);
  };

  render() {
    const {
      countryInfo: { countryName, cases, flag }
    } = this.props;
    return (
      <>
        <ListItem
          button
          alignItems='flex-start'
          onClick={() => this.onSelectCountry(countryName)}
        >
          <ListItemAvatar>
            <Avatar alt='Remy Sharp' src={flag} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography component='span' variant='body2'>
                  {countryName}
                </Typography>
              </>
            }
            secondary={cases}
          />
        </ListItem>
        <Divider />
      </>
    );
  }
}

const mapStateToProps = state => ({
  cases: state.feedReducers.cases
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryListItemComponent);
