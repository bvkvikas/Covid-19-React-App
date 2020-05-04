/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';

class CasesComponent extends PureComponent {
  render() {
    const { color, header, data } = this.props;
    return (
      <>
        <Card bg={color} key={1} text='white'>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title>{data} </Card.Title>
            <Card.Text />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CasesComponent;
