import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CasesComponent from './casesComponent';
class CountryDataComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card bg='dark' key={1} text='white'>
          <Card.Header>{this.props.data[0].country}</Card.Header>
          <Card.Body>
            <Card.Title>Cases </Card.Title>
            <Card.Text>
              <div className='row'>
                <div class='col-md-3'>
                  <CasesComponent
                    data={this.props.data[0].todayCases}
                    header=" Today's Cases"
                    color='primary'
                  />
                </div>

                {/* Active  */}
                <div class='col-md-3'>
                  <CasesComponent
                    data={this.props.data[0].active}
                    header=' Active Cases'
                    color='warning'
                  />
                </div>

                {/* Total Cases */}

                <div class='col-md-3'>
                  <CasesComponent
                    data={this.props.data[0].cases}
                    header=' Total Cases'
                    color='secondary'
                  />
                </div>

                {/* Death */}
                <div class='col-md-3'>
                  <CasesComponent
                    data={this.props.data[0].deaths}
                    header=' Death'
                    color='danger'
                  />
                </div>

                {/* <div class='col-md-3'>
                  <ActiveComponent data={this.props.data[0].active} />
                </div>
                <div class='col-md-3'>
                  <TotalCasesComponent data={this.props.data[0].cases} />
                </div>
                <div class='col-md-3'>
                  <DeathCasesComponent data={this.props.data[0].deaths} />
                </div> */}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }

  test() {
    console.log(this.props.data);
  }
}

export default CountryDataComponent;
