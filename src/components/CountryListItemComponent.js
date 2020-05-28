import React, { PureComponent } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';

class CountryListItemComponent extends PureComponent {
  componentDidMount() {}

  render() {
    const onSelectCountry = countryInfo => {};
    const {
      countryInfo: { countryName, cases, flag }
    } = this.props;
    return (
      <>
        <ListItem
          button
          alignItems='flex-start'
          onClick={() => onSelectCountry(countryName)}
        >
          <ListItemAvatar>
            <Avatar alt={countryName} src={flag} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography>{countryName}</Typography>}
            secondary={
              <Typography variant='body2'>
                {`Total Cases:  ${cases}`}
              </Typography>
            }
          />
        </ListItem>
        {/* <Divider variant='middle' component='li' className={classes.root} /> */}
        <Divider variant='middle' component='li' />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
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
)(CountryListItemComponent);
