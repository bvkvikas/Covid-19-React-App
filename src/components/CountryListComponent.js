import React from 'react';
import Table from 'react-bootstrap/Table';

const CountryListComponent = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <Table bordered hover variant="dark">
      <thead>
        <tr>
          <th>Country</th>
          <th>Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Worldwide</td>
          <td>123456789</td>
        </tr>
        <tr>
          <td>USA</td>
          <td>44444</td>
        </tr>
        <tr>
          <td>India</td>
          <td>78</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default CountryListComponent;
