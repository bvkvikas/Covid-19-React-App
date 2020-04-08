import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CasesComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card bg={this.props.color} key={1} text='white'>
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.data} </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default CasesComponent;
