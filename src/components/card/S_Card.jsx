import React from 'react';
import {Card, Button} from "react-bootstrap";

const S_Card = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.card.img} />
            <Card.Body>
                <Card.Title>{props.card.title}</Card.Title>
                <Card.Text>
                    {props.card.description}
                </Card.Text>
                <Button variant="outline-secondary" href={props.card.button}>Дізнатися більше</Button>
            </Card.Body>
        </Card>
    );
};

export default S_Card;