import React, {useEffect} from 'react';
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import {Card, Row} from "react-bootstrap";
import {ImageViewer} from "react-image-viewer-dv";
import TopPages from "../../topPages/TopPages";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
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
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        let cards = "Немає вибраних товарів";
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            cards = cardsLocal.map(item => {
                return(
                    <div key={item.id}>
                        <ImageViewer>
                            <Card.Img  variant="top" src={item.imgurl} />
                        </ImageViewer>
                    </div>
                );
            });
        }
        return (cards);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <h2><br />Список вподобаних тату</h2>
                <Row xs={1} md={3}  className="g-5 m-5 col-9 roomfac">
                    {getLocalStore()}
                </Row>
            </div>

            <>
                <Button variant="primary" onClick={handleShow}>
                    Список вподобаних тату
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="row">
                            <h2 style={{textAlign: "center"}}>Список вподобаних тату</h2>
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