import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';
import CasesComponent from './casesComponent';

class CountryDataComponent extends PureComponent {
  render() {
    const { country, todayCases, active, cases, deaths } = this.props.data;
    console.log(this.props);
    return (
      <>
        <Card bg='dark' key={1} text='white'>
          <Card.Header>{country}</Card.Header>
          <Card.Body>
            <Card.Title>Cases </Card.Title>
            <Card.Text>
              <div className='row'>
                <div className='col-md-3'>
                  <CasesComponent
                    data={todayCases}
                    header=" Today's Cases"
                    color='primary'
                  />
                </div>

                {/* Active  */}
                <div className='col-md-3'>
                  <CasesComponent
                    data={active}
                    header=' Active Cases'
                    color='warning'
                  />
                </div>

                {/* Total Cases */}

                <div className='col-md-3'>
                  <CasesComponent
                    data={cases}
                    header=' Total Cases'
                    color='secondary'
                  />
                </div>

                {/* Death */}
                <div className='col-md-3'>
                  <CasesComponent
                    data={deaths}
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
      </>
    );
  }
}

export default CountryDataComponent;
