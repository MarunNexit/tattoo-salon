import React, {useEffect} from 'react';
import GoogleMap from "../../googleMap/GoogleMap"
import {Col, Row, Image} from "react-bootstrap";
import TopPages from "../../shared/topPages/TopPages";
import FormMain from "../../form/FormMain";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container-fluid">
            <TopPages text={"Контакти"} img={"img/top/top_backgr.jpg"}/>
            <br/>
            <br/>
            <Row>
                <Col md={{ span: 5, offset: 1 }} className="col my-auto" >
                    <Image src={"../../img/contact/contact_2.png"} style={{height: "350px", objectFit: "contain"}}/>
                </Col>
                <Col md={{ span: 4 , offset: 1 }}  className="col my-auto">
                    <div style={{fontSize: 20}} >
                        <h2>Контактні дані</h2>
                        <div>
                            Україна, Івано-Франківськ, вул. Федьковича
                        </div>
                        <div>
                            Тел: +380974839217
                        </div>
                        <div>
                            mazkevych2003@gmail.com
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }}  className="col my-auto" >
                    <div style={{fontSize: 20}}>
                        <h2>Графік роботи</h2>
                        <div>
                            Пн-Нд
                        </div>
                        <div>
                            11:00-20:00
                        </div>
                    </div>
                </Col>
                <Col md={{ span: 4}} className="col my-auto"  >
                        <Image  src={"../../img/contact/contact_1.jpg"} style={{height: 350}}/>
                </Col>
            </Row>
            <br/><br/>
            <TopPages img={"img/top/backgr_1.png"}/>
            <br/><br/>
            <GoogleMap />
            <br/><br/>
            <TopPages img={"img/top/backgr_2.png"}/>
            <br/><br/>
            <FormMain state={false}/>
        </div>
    );
};

export default Contact;