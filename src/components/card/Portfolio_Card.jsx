import React from 'react';
import {Card} from "react-bootstrap";
import { ImageViewer } from "react-image-viewer-dv"

const Portfolio_Card = (props) => {

    const addItem = () => {
        console.log(props.card);
    }
    return (
        <div>
            <Card>
                <ImageViewer>
                    <Card.Img className={"CItem"} variant="top" src={props.card.imgurl} onClick={addItem} />
                </ImageViewer>
            </Card>
        </div>
    );
};

export default Portfolio_Card;