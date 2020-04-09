import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card } from "react-bootstrap";
import _ from "lodash";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
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
              >
                {_.get(row, "profile_background_image_url", "No data")}
              </img>
              <strong className="mr-auto">WHO</strong>
              <small>{_.get(row, "created_at", "No data")}</small>
            </Toast.Header>
            <Toast.Body>{_.get(row, "text", "No data")}</Toast.Body>
          </Toast>
        ))}

        <Toast className=" bg-dark text-light">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Mr.X </strong>
            <small>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Tweet 2</Toast.Body>
        </Toast>
      </Card.Body>
    </Card>
  </div>
);
export default FeedComponent;
