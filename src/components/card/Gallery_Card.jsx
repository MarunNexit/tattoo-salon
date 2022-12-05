import React, {useEffect} from 'react';
import {Button, Card, Row} from "react-bootstrap";
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
                    if(item.id._key.path.segments[6] === props.card.id._key.path.segments[6]) {
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
            setButtonVariant("danger");
            setButtonText("Не подобається");
        }
        else
        {
            props.removeItem(props.card);
            setButtonVariant("success");
            setButtonText("Подобається");
        }
    }

    const deleteCard = () =>{
        props.deleteData(props.card);
    }


    const editCard = () => {
        props.editData(props.card);
    }




    return (
            <div>
            <Card >
                    <ImageViewer>
                        <Card.Img  variant="top" src={props.card.url} />
                    </ImageViewer>

                <Card.Footer>
                    {editMode ?
                        <Row md={2}>
                            <Button variant="success" onClick={editCard}>Редагувати</Button>
                            <Button variant="danger" onClick={deleteCard}>Видалити</Button>
                        </Row>
                    :
                    <Button variant={buttonVariant} onClick={addItem}>{/*Button Text*/} {buttonText}</Button>
                    }
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Gallery_Card;