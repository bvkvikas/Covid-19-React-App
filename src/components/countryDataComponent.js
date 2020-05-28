import React, { Component } from 'react';
import Cards from './Cards/Cards';

// import { styles } from '../Cards.modules.css';

// eslint-disable-next-line react/prefer-stateless-function
class CountryDataComponent extends Component {
  render() {
    const { data } = this.props;
    const { todayCases, active, deaths } = data;
    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
}

export default CountryDataComponent;
