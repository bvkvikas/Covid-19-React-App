import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card, Row } from "react-bootstrap";
import _ from "lodash";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
      </Col>
    </Row>
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
