import React, {useEffect} from 'react';
import GoogleMap from "../../googleMap/GoogleMap"
import {Col, Row, Image} from "react-bootstrap";
import TopPages from "../../topPages/TopPages";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <TopPages text={"Контакти"} />
            <br/>
            <br/>
            <Row>
                <Col className={"container-block"} >
                    <Image src={"../../img/portf_1.jpg"} style={{height: 400}}/>
                </Col>
                <Col style={{height: 400, weight: "100%"}} className={"container-block"}>
                    <div style={{fontSize: 20}} className={"newblock"}>
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
            <Row xs={2}>
                <Col className={"container-block"} style={{height: 400, weight: "100%"}}>
                    <div style={{fontSize: 20, marginLeft: "auto", marginRight: "auto", width: "40em"}} className={"newblock"}>
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
                <Col className={"container-block"} style={{height: 400, weight: "100%"}}>
                    <div className={"newblock"}>
                        <Image  src={"../../img/portf_1.jpg"} style={{height: 400}}/>
                    </div>
                </Col>
            </Row>
            <GoogleMap url={""} />
        </div>
    );
};

export default Contact;