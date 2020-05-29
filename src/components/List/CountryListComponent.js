import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CountryListItemComponent from './CountryListItemComponent';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'rgba(119, 119, 119,0.05)',
    maxHeight: '100px',
    overflow: 'auto',
    color: 'white'
  },
  inline: {
    display: 'inline'
  },
  list: {
    backgroundColor: 'rgba(119, 119, 119,0.05)'
  },
  paper: {
    height: '80vh',
    overflow: 'auto'
  }
});

const CountryListComponent = data => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {data.data.map(row => (
          <CountryListItemComponent key={row.countryName} countryInfo={row} />
        ))}
      </List>
    </Paper>
  );
};
export default CountryListComponent;
