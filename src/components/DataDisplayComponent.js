import React from "react";
import Card from "react-bootstrap/Card";

const DataDisplayComponent = () => {
    return <div>
        <Card
            bg={"dark"}
            key={1}
            text={"white"}
        >
            <Card.Header>Data Header</Card.Header>
            <Card.Body>
                <Card.Title>Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
};
export default DataDisplayComponent;