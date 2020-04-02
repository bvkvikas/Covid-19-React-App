import React from "react";
import List from "@material-ui/core/List";
import CountryListItemComponent from "./CountryListItemComponent";

const CountryListComponent = data => (
  <div>
    <List className='bg-dark text-light rounded' height={400} width={300}>
      {data.data.map(row => (
        <CountryListItemComponent key={row.country} country_info={row} />
      ))}
    </List>
  </div>
);

export default CountryListComponent;
