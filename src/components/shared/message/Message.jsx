import React from "react";
import { Alert } from "react-bootstrap";

function Message(props) {

    return (
        <Alert variant={props.type} show={true} onClose={() => props.setIsMessage(false)} dismissible>
            {props.heading ? <Alert.Heading>{props.heading}</Alert.Heading> : ""}
            {props.text ? <p>{props.text}</p> : ""}
        </Alert>
    );
}

export default Message;