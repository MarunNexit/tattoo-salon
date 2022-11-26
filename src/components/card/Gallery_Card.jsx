import React from 'react';
import {Button, Card} from "react-bootstrap";
import { ImageViewer } from "react-image-viewer-dv"
import {useState} from "react";
import TopPages from "../topPages/TopPages";

const Gallery_Card = (props) => {

    const [buttonText, setButtonText]= useState('Подобається');
    const [buttonVariant, setButtonVariant] = useState("success");

    const addItem = () =>{

        if(buttonVariant === "success")
        {
            props.getItem(props.card);
            console.log(props.card);
            setButtonVariant("danger");
            setButtonText("Не подобається");
        }
        else
        {
            props.removeItem(props.card);
            console.log(props.card);
            setButtonVariant("success");
            setButtonText("Подобається");
        }
    }

    return (
            <div>
            <Card >
                <ImageViewer>
                    <Card.Img  variant="top" src={props.card.imgurl} />
                </ImageViewer>
                <Card.Footer>
                    <Button variant={buttonVariant} onClick={addItem}>{/*Button Text*/} {buttonText}</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Gallery_Card;