import React from 'react';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/jsx-filename-extension
const DataDisplayComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <Card
      bg="dark"
      key={1}
      text="white"
    >
      <Card.Header>Data Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          {JSON.stringify(data)}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
export default DataDisplayComponent;
