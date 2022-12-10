import React, {useEffect} from 'react';
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import {Card, Row} from "react-bootstrap";
import {ImageViewer} from "react-image-viewer-dv";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';




const GalleryLike = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        let cards = "Немає вподобаних тату";
        if(cardsLocal === null){
            return (cards);
        }
        else
        {
            cardsLocal = cardsLocal[2] ? JSON.parse(cardsLocal) : cardsLocal;
            let cards = "Немає вподобаних тату";
            if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
                cards = cardsLocal.map((item, index) => {
                        return(
                            <div key={index}>
                                <ImageViewer>
                                    <Card.Img  variant="top" src={item.url} />
                                </ImageViewer>
                            </div>
                        );
                });
            }
            return (cards);
        }
    };

    return (
        <div className="container-fluid">
            <>
                <Button variant="primary" variant="danger" onClick={handleShow}>
                    Список вподобаних тату
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Список вподобаних тату</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="row">
                            <h2 style={{textAlign: "center"}}>Вподобані тату</h2>
                            <Row xs={1} md={1}  className="g-5 m-5 col-9 roomfac">
                                {getLocalStore()}
                            </Row>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    );
};

export default GalleryLike;