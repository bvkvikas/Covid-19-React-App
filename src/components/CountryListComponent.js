import React, { Component } from 'react';
import List from '@material-ui/core/List';
import CountryListItemComponent from './CountryListItemComponent';

const CountryListComponent = data => {
  return (
    <List className='bg-dark text-light rounded' width={300}>
      {data.data.map(row => (
        <CountryListItemComponent key={row.countryName} countryInfo={row} />
      ))}
    </List>
  );
};

export default CountryListComponent;
