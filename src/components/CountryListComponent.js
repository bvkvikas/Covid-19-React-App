import React, { Component } from 'react';
import List from '@material-ui/core/List';
import CountryListItemComponent from './CountryListItemComponent';

class CountryListComponent extends Component {
  state = {};

  handleSelectedCountry = (country) => {
    console.log('TESTING MY THING', country);
  };

  render() {
    return (
      <React.Fragment>
        <List className='bg-dark text-light rounded' height={400} width={300}>
          {this.props.data.map((row) => (
            <CountryListItemComponent
              key={row.country}
              country_info={row}
              onSelectCountry={this.handleSelectedCountry}
              // onSelectCountry={this.props.onSelectCountry}
            />
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default CountryListComponent;
