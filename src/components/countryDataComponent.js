import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';
import CasesComponent from './casesComponent';

class CountryDataComponent extends PureComponent {
  render() {
    const { data } = this.props;
    const { country, todayCases, active, cases, deaths } = data;
    return (
      <div>
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
                    color='blue'
                  />
                </div>

                {/* Active  */}
                <div className='col-md-3'>
                  <CasesComponent
                    data={active}
                    header=' Active Cases'
                    color='red'
                  />
                </div>

                {/* Total Cases */}

                <div className='col-md-3'>
                  <CasesComponent
                    data={cases}
                    header=' Total Cases'
                    color='yellow'
                  />
                </div>

                {/* Death */}
                <div className='col-md-3'>
                  <CasesComponent data={deaths} header=' Death' color='green' />
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CountryDataComponent;
