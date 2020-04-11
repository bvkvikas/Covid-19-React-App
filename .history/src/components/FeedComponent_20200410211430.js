import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import _ from "lodash";
import Avatar from "@material-ui/core/Avatar";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
    <Container style={{ background: "#00acee" }}>
      <Image
        width={50}
        height={50}
        alt="50x50"
        src="https://montgomeryplanning.org/wp-content/uploads/2016/09/twitter-bird-white-on-blue.png"
        roundedCircle
      />
      <strong className="mr-auto" style={{ color: "#FFFFFF" }}>
        Twitter Live Feed
      </strong>
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
              <Container>
                <Avatar
                  alt={_.get(row, "user.profile_image_url", "No data")}
                  src={_.get(row, "user.profile_image_url", "No data")}
                />
              </Container>
              <Container>
                <strong>
                  #{_.get(row, "entities.hashtags[0].text", "WHO")}
                </strong>
              </Container>
            </Toast.Header>
            <Toast.Body>{_.get(row, "text", "No data")}</Toast.Body>
          </Toast>
        </Card.Body>
      ))}
    </Card>
  </div>
);
export default FeedComponent;
