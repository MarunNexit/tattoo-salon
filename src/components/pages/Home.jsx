import React from 'react';
import S_Card from "../card/S_Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";

let titles = ['Портфоліо', 'Kurisu', 'Контакти'];
let scrs = ['/portfolio', '/about', '/about'];
let desc = ['Багата різноманітність різних тату-майстрів та їх робіт', 'Kurisu - це один з успішних тату-салонів ІФ', 'Щоб звенутися до працівників тату-салону Kurisu, дзвоніть на:+380974839217']

const Cards = () => {
    return (
        <div>
            <br /><br /><br /><br />
            <div className="banner-bg" style={{
                    backgroundImage: `url(${"img/home_backgr_1.jpg"})`,
                    hight: 'auto',
                    minHeight: '100%',
                    alignItems:'center'
                }}>
                    <div className={"banner_footer"}>
                        <br />
                        <div className="tools">
                            <div className="block">
                                1
                            </div>
                            <div className="block">
                                <Button variant="outline-light" size="lg" href={"/portfolio"}>Дізнатися більше</Button>
                            </div>
                            <div className="block">
                                3
                            </div>
                        </div>
                    </div>
            </div>
            <br />
            <section className="container">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            {/* eslint-disable-next-line react/jsx-pascal-case */}
                            <S_Card card={{id: idx, title: titles[idx], description: desc[idx], img: "/img/tattoo"+idx+".png",
                                button: scrs[idx]}}
                                    otherval={"other"}/>
                        </Col>))
                    }
                </Row>
            </section>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <Cards  />
        </div>
    );
};

export default Home;