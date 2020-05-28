import React, { Component } from 'react';
import List from '@material-ui/core/List';
import _ from 'lodash';
import CountryListItemComponent from './CountryListItemComponent';

const CountryListComponent = data => {
  return (
    <List className='bg-dark text-light rounded' height={400} width={300}>
      {data.data.map(row => (
        <CountryListItemComponent key={row.country} countryInfo={row} />
      ))}
    </List>
  );
};

export default CountryListComponent;
