import React, { PureComponent } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

class CountryListItemComponent extends PureComponent {
  render() {
    const { onSelectCountry, countryInfo } = this.props;
    return (
      <>
        <ListItem
          button
          alignItems='flex-start'
          onClick={() => onSelectCountry(countryInfo)}
        >
          <ListItemAvatar>
            <Avatar
              alt={countryInfo.country}
              src={countryInfo.countryInfo.flag}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography>{countryInfo.country}</Typography>}
            secondary={
              <Typography variant='body2'>
                {`Total Cases:  ${countryInfo.cases}`}
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

export default CountryListItemComponent;
