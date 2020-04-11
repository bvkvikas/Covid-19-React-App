import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import _ from "lodash";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
    <Container style={{ background: "#00acee" }}>
      <Row>
        <Col xs={6} md={4}>
          <Image
            width={50}
            height={50}
            alt="50x40"
            src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimg%2F47461&psig=AOvVaw2m-ri0iCnB1InuoHY7qFER&ust=1586648959426000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiSsZKG3-gCFQAAAAAdAAAAABAD"
            roundedCircle
          />
        </Col>
        <Col xs={6} md={4}>
          <strong className="mr-auto" style={{ color: "#FFFFFF" }}>
            #Covid19
          </strong>
        </Col>
        <Col xs={6} md={4}>
          <strong className="mr-auto" style={{ color: "#FFFFFF" }}>
            #WHO
          </strong>
        </Col>
      </Row>
    </Container>
    <Card>
      {data.data.map((row) => (
        <Card.Body
          className=" bg-light text-primary"
          key={_.get(row, "text", "No data")}
        >
          <Toast className=" bg-dark text-light">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">
                {_.get(row, "user.screen_name", "No data")}
              </strong>
              <small>{_.get(row, "user.location", "No data")}</small>
            </Toast.Header>
            <Toast.Body>{_.get(row, "text", "No data")}</Toast.Body>
          </Toast>
        </Card.Body>
      ))}
    </Card>
  </div>
);
export default FeedComponent;
