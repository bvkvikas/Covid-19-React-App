import React, { Component } from 'react';
import List from '@material-ui/core/List';
import CountryListItemComponent from './CountryListItemComponent';

class CountryListComponent extends Component {
  render() {
    return (
      <>
        <List className='bg-dark text-light rounded' height={400} width={300}>
          {this.props.data.map(row => (
            <CountryListItemComponent
              key={row.country}
              countryInfo={row}
              onSelectCountry={this.handleSelectedCountry}
              // onSelectCountry={this.props.onSelectCountry}
            />
          ))}
        </List>
      </>
    );
  }
}

export default CountryListComponent;
