import React, {useEffect} from 'react';
import {Button, Card} from "react-bootstrap";
import { ImageViewer } from "react-image-viewer-dv"
import {useState} from "react";
import {LOCALSTORE_TOTALITEMS} from "../models/Сonstants";

const Gallery_Card = (props) => {

    const [buttonText, setButtonText]= useState('Подобається');
    const [buttonVariant, setButtonVariant] = useState("success");
    const [editMode, setEditMode] = useState(props.edit);


    useEffect(() => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
                cardsLocal.map(item => {
                    if(item.id === props.card.id) {
                        console.log(props.card);
                        setButtonVariant("danger");
                        setButtonText("Не подобається");
                    }
            });
        }
    }, [])

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

    const deleteItem = () =>{
        console.log(props.card);
        props.deleteCard(props.card);

    }

    return (
            <div>
            <Card >
                <ImageViewer>
                    <Card.Img  variant="top" src={props.card.imgurl} />
                </ImageViewer>
                <Card.Footer>
                    {editMode?
                        <Button variant="danger" onClick={deleteItem}>Видалити</Button>
                    :
                    <Button variant={buttonVariant} onClick={addItem}>{/*Button Text*/} {buttonText}</Button>
                    }
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Gallery_Card;