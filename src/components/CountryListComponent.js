import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CountryListItemComponent from './CountryListItemComponent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'grey',
    maxHeight: '100px',
    overflow: 'auto',
    color: 'white'
  },
  inline: {
    display: 'inline'
  }
}));

const CountryListComponent = data => {
  const classes = useStyles();

  return (
    <List
      style={{
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: 'grey',
        color: 'white',
        maxHeight: 200,
        overflow: 'auto'
      }}
    >
      {data.data.map(row => (
        <CountryListItemComponent key={row.countryName} countryInfo={row} />
      ))}
      <Divider variant='inset' component='li' />
    </List>
  );
};
export default CountryListComponent;
