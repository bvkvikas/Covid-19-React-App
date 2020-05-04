import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import _ from "lodash";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image
            width={10}
            height={10}
            alt="171x180"
            src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=90"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
    <Card>
      <Card.Body className=" bg-light text-primary">
        {data.data.map((row) => (
          <Toast
            className=" bg-dark text-light"
            key={_.get(row, "text", "No data")}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">
                {_.get(row, "user.screen_name", "No data")}
              </strong>
              <small>{_.get(row, "created_at", "No data")}</small>
            </Toast.Header>
            <Toast.Body>{_.get(row, "text", "No data")}</Toast.Body>
          </Toast>
        ))}
      </Card.Body>
    </Card>
  </div>
);
export default FeedComponent;
