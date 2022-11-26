import React, {useEffect} from 'react';
import S_Card from "../../card/S_Card";
import {Row, Col} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Container} from "../../footer/FooterStyles";

const itemList = [
    {id: 1,titles: "Портфоліо", urls: "/gallery", desc: "Багата різноманітність різних тату-майстрів та їх робіт", img: "/img/tattoo0.png"},
    {id: 2,titles: "Kurisu", urls: "/about", desc: "Kurisu - це один з успішних тату-салонів ІФ", img: "/img/tattoo1.png"},
    {id: 3,titles: "Контакти", urls: "/contact", desc: "Щоб звенутися до працівників тату-салону Kurisu, дзвоніть на:+380974839217", img: "/img/tattoo2.png"},
];


const Cards = () => {


    return (
        <div>
            <div className="banner-bg" style={{
                    backgroundImage: `url(${"img/home_backgr_1.jpg"})`,
                    hight: 'auto',
                    minHeight: '100%',
                    alignItems:'center'
                }}>
                    <div className={"banner_footer"}>
                        <br />
                        <div className="tools" style={{marginTop: 10}}>
                            <div className="block" style={{marginLeft: 40, marginRight: 10,textAlign: "left", maxHeight: '10'}}>
                                <Row xs={2} >
                                <Col style={{width:"8vh"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6vh" height="100%" fill="currentColor"
                                     className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                </Col>
                                <Col >
                                    <h4>м.Івано-Франківськ</h4>
                                    <h4>вул.Федьковича,70б</h4>
                                </Col>
                                </Row>
                            </div>
                            <div className="block">
                                <Button className="d-grid gap-2" variant="outline-light" size={"lg"} as={ Link } style={{fontSize: 22, width: "80%", marginLeft: "auto", marginRight: "auto"}} to={"/appointment"}>Записатися на сеанс</Button>
                            </div>
                            <div className="block" style={{marginLeft: 10,marginRight: 40, textAlign: "right", verticalAlign: "tex" }}>
                                <h4>Пн-Нд 11:00-20:00</h4>
                                <h4>+380974839217</h4>
                            </div>
                        </div>
                    </div>
            </div>
            <br />
            <section className="container">
                <Row xs={1} md={2}  className="g-4">
                    {itemList.map(item => {
                        return(
                            <Col key={item.id} >
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <S_Card card={item}  />
                            </Col>
                        )
                    })}
                </Row>
            </section>
        </div>
    );
};

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Cards  />
        </div>
    );
};

export default Home;