import React from 'react';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white'
  }
}));

const CountryListItemComponent = ({ country_info }) => {
  const classes = useStyles();
  return (
    <div>
      <ListItem button alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt={country_info.country}
            src={country_info.countryInfo.flag}
          />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography>{country_info.country}</Typography>}
          secondary={
            <Typography variant='body2'>
              {'Total Cases:  ' + country_info.cases}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant='middle' component='li' className={classes.root} />
    </div>
  );
};

export default CountryListItemComponent;
