import React from 'react';
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const S_Card = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.card.img} />
            <Card.Body>
                <Card.Title>{props.card.titles}</Card.Title>
                <Card.Text>
                    {props.card.desc}
                </Card.Text>
                <Button variant="outline-secondary" as={Link} to= {props.card.urls}>Дізнатися більше</Button>
            </Card.Body>
        </Card>
    );
};

export default S_Card;