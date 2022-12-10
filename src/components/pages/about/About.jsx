import React, {useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import TopPages from "../../shared/topPages/TopPages";
import {Link} from "react-router-dom";
import {useAuthorContext} from "../../context/AuthorContext";

const About = () => {

    const {author} = useAuthorContext();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container-fluid">
            <TopPages text={"Про нас"} img={"img/top/top_backgr.jpg"}/>
            <br/><br/>
            <Row className="justify-content-md-centre">
                <Col className="col my-auto" md={{ span: 4, offset: 1 }} >
                    <Image src={"../../img/about/about.png"} style={{height: 300}}/>
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
            <TopPages img={"img/top/backgr_1.png"}/>
            <br/><br/>
            <h2 style={{fontSize: 36}}>Робочий персонал</h2>
            <br/>
            {Array.from(author).map((item, index) => {
                return (
                    <Container key={index}>
                        <Row className="justify-content-md-centre">
                            {item.addimg === "" || item.addimg === " " || item.addimg === null || item.addimg === undefined?
                                <Row className="justify-content-md-centre" >
                                    <Col md={{ span: 5, offset: 1 }} className="col my-auto">
                                        <h3>{item.name}</h3>
                                        <div style={{fontSize: 20}}> {item.descript}  Щоб переглянути портфоліо, <Link as={ Link } to="/gallery">натисніть тут </Link> або перегляньте @slavamephi в Instagram
                                        </div>
                                    </Col>
                                    <Col className="col my-auto" md={{ span: 5 }} >
                                        <Image src={item.headimg} style={{height: 320}}/>
                                    </Col>
                                </Row>
                                :
                                <Row className="justify-content-md-centre">
                                    <Col className="col my-auto" md={{ span: 5, offset: 1 }} >
                                        <Image src={item.addimg} style={{height: "80%", width: "80%"}}/>
                                    </Col>
                                    <Col md={{ span: 5 }} className="row gy-1">
                                        <Col className="col my-auto">
                                            <h3>{item.name}</h3>
                                            <div style={{fontSize: 20}}> {item.descript} Щоб переглянути портфоліо, <Link as={ Link } to="/gallery">натисніть тут</Link> або перегляньте @slavamephi в Instagram
                                            </div>
                                        </Col>
                                        <Col  className="d-flex flex-column justify-content-end" >
                                            <Image src={item.headimg} style={{height: 400}}/>
                                        </Col>
                                    </Col>
                                </Row>
                            }
                        </Row>
                        <br />    <br />
                    </Container>
                )
            })
            }
        </div>
    );
};

export default About;