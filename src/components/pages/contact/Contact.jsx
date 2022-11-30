import React, {useEffect} from 'react';
import GoogleMap from "../../googleMap/GoogleMap"
import {Col, Row, Image} from "react-bootstrap";
import TopPages from "../../topPages/TopPages";
import FormContact from "../../form/FormContact";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container-fluid">
            <TopPages text={"Контакти"} />
            <br/>
            <br/>
            <Row>
                <Col md={{ span: 5, offset: 1 }}>
                    <Image src={"../../img/tattoo0.png"} style={{height: 350}}/>
                </Col>
                <Col md={{ span: 4 }}  className="col my-auto">
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
                        <h2>Адреса</h2>
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
                <Col md={{ span: 4}} className="col my-auto"  >
                        <Image  src={"../../img/tattoo1.png"} style={{height: 350}}/>
                </Col>
            </Row>
            <br/><br/>
            <TopPages />
            <br/><br/>
            <GoogleMap />
            <br/><br/>
            <TopPages />
            <br/><br/>
            <FormContact state={false}/>
        </div>
    );
};

export default Contact;