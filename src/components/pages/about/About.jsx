import React, {useEffect} from 'react';
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import {Card, Col, Image, Row} from "react-bootstrap";
import {ImageViewer} from "react-image-viewer-dv";
import TopPages from "../../topPages/TopPages";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container-fluid">
            <TopPages text={"Про нас"} />
            <br/><br/>
            <Row className="justify-content-md-centre">
                <Col className="col my-auto" md={{ span: 5, offset: 1 }} >
                    <Image roundedCircle={true} src={"../../img/tattoo1.png"} style={{height: 300}}/>
                </Col>

                <Col md={{ span: 5}} className="col my-auto">
                    <h2 style={{fontSize: 36}}>Ласкаво присимо до тату-студії "КУРІСУ"</h2>
                    <div style={{fontSize: 20}}> Ласкаво просимо до міста Івано-Франківськ, до нашої тату-студії, яка
                        надасть Вам послуги у сфері тату. Додайте у своє життя
                        яскравих емоцій та контрасту, відвідавши наш заклад.
                        Івано-Франківська тату-студія за настільки довгий час виявила себе
                        досить сильно і сміливо, не даючи засумніватися у своїй
                        роботі. Ви все ще думаєте зробити татуювання в Івано-Франківську? Не
                        думайте - наважуйтеся швидше, тату салон "КУРІСУ" завжди
                        готовий зробити Ваше життя яскравим та насиченим. Покажи свою унікальність.
                    </div>
                </Col>
            </Row>
            <br/><br/>
            <TopPages />
            <br/><br/>
            <h2 style={{fontSize: 36}}>Робочий персонал</h2>
            <Row className="justify-content-md-centre">
                <Col md={{ span: 5, offset: 1 }}className="col my-auto">
                    <h3 >Софія Богданова</h3>
                    <div style={{fontSize: 20}}> Професійний тату-майстер з Запоріжжя.
                    </div>
                </Col>
                <Col className="col my-auto" md={{ span: 5 }} >
                    <Image roundedCircle={true} src={"../../img/tattoo1.png"} style={{height: 300}}/>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-centre">
                <Col className="col my-auto" md={{ span: 5, offset: 1 }} >
                    <Image roundedCircle={true} src={"../../img/tattoo1.png"} style={{height: 300}}/>
                </Col>

                <Col md={{ span: 5}} className="col my-auto">
                    <h3>Арсен Коваль</h3>
                    <div style={{fontSize: 20}}> Ласкаво просимо до міста Івано-Франківськ, до нашої тату-студії, яка
                        надасть Вам послуги у сфері тату. Додайте у своє життя
                        яскравих емоцій та контрасту, відвідавши наш заклад.
                        Івано-Франківська тату-студія за настільки довгий час виявила себе
                        досить сильно і сміливо, не даючи засумніватися у своїй
                        роботі. Ви все ще думаєте зробити татуювання в Івано-Франківську? Не
                        думайте - наважуйтеся швидше, тату салон "КУРІСУ" завжди
                        готовий зробити Ваше життя яскравим та насиченим. Покажи свою унікальність.
                    </div>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-centre">
                <Col md={{ span: 5, offset: 1 }} className="col my-auto">
                    <h3>Денис Овчаренко</h3>
                    <div style={{fontSize: 20}}> Ласкаво просимо до міста Івано-Франківськ, до нашої тату-студії, яка
                        надасть Вам послуги у сфері тату. Додайте у своє життя
                        яскравих емоцій та контрасту, відвідавши наш заклад.
                        Івано-Франківська тату-студія за настільки довгий час виявила себе
                        досить сильно і сміливо, не даючи засумніватися у своїй
                        роботі. Ви все ще думаєте зробити татуювання в Івано-Франківську? Не
                        думайте - наважуйтеся швидше, тату салон "КУРІСУ" завжди
                        готовий зробити Ваше життя яскравим та насиченим. Покажи свою унікальність.
                    </div>
                </Col>
                <Col className="col my-auto" md={{ span: 5 }} >
                    <Image roundedCircle={true} src={"../../img/tattoo1.png"} style={{height: 300}}/>
                </Col>
            </Row>
        </div>
    );
};

export default About;