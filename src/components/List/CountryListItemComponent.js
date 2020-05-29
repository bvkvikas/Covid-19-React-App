import React, { PureComponent } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

class CountryListItemComponent extends PureComponent {
  componentDidMount() {}

  onSelectCountry = countryInfo => {
    console.log(`Selected ${countryInfo}`);
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
