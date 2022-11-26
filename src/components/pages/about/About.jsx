import React, {useEffect} from 'react';
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import {Card, Row} from "react-bootstrap";
import {ImageViewer} from "react-image-viewer-dv";
import TopPages from "../../topPages/TopPages";

const About = () => {

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
            <TopPages text={"Про нас"} />
            <div className="row">
                <h2><br />Список вибраних товарів</h2>
                <Row xs={1} md={3}  className="g-5 m-5 col-9 roomfac">
                    {getLocalStore()}
                </Row>
            </div>
        </div>
    );
};

export default About;