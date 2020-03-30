import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CountryListComponent from './CountryListComponent';
import DataDisplayComponent from './DataDisplayComponent';
import FeedComponent from './FeedComponent';
import LogoComponent from './LogoComponent';
import * as constants from '../server/constants';
import * as api from '../server/api';

class MainDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const options = {
      url: constants.URL.TOTAL_CASES,
      requestType: constants.REQUEST_TYPE.GET,
    };
    this.getData(options);
  }

  getData(options) {
    return api.makeGetAPICall(options).then((response) => {
      const cases = response.data;
      this.setState({ cases });
    });
  }


  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { cases } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container-fluid">
        <br />
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <LogoComponent />
            {' '}
            {'  '}
            COVID-19
          </Navbar.Brand>
        </Navbar>
        <br />
        <div className="row">
          <div className="col-sm-2">
            <CountryListComponent />
          </div>
          <div className="col-md-7">
            <DataDisplayComponent data={cases} />
          </div>
          <div className="col-md-3">
            <FeedComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default MainDashboardComponent;
