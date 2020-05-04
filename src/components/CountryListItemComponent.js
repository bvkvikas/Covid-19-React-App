import React, { Component } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

class CountryListItemComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ListItem
          button
          alignItems='flex-start'
          onClick={() => this.props.onSelectCountry(this.props.country_info)}
        >
          <ListItemAvatar>
            <Avatar
              alt={this.props.country_info.country}
              src={this.props.country_info.countryInfo.flag}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography>{this.props.country_info.country}</Typography>}
            secondary={
              <Typography variant='body2'>
                {'Total Cases:  ' + this.props.country_info.cases}
              </Typography>
            }
          />
        </ListItem>
        {/* <Divider variant='middle' component='li' className={classes.root} /> */}
        <Divider variant='middle' component='li' />
      </React.Fragment>
    );
  }
}

export default CountryListItemComponent;
