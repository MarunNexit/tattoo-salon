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
            <div className="banner-bg" style={{
                backgroundImage: `url(${"img/home_backgr_1.jpg"})`,
                hight: 'auto',
                minHeight: '100%',
                alignItems:'center'
            }}>
                <div className={"banner_footer"}>
                    <br />
                    <Row xs="auto" className="tools" style={{marginTop: 10, marginRight: 10}}>
                        <Col className="justify-content-start" style={{marginLeft: 40, marginRight: 10,textAlign: "left", maxHeight: '10'}}>
                            <Row xs={2} >
                                <Col sm={2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6vh" height="100%" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </Col>
                                <Col sm={10} className="col my-auto" >
                                    <h4>м.Івано-Франківськ</h4>
                                    <h4>вул.Федьковича,70б</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}  className="col my-auto">
                            <Button className="d-grid gap-2" variant="outline-light" size={"lg"} as={ Link } to={"/appointment"} style={{fontSize: 22, width: "80%", marginLeft: "auto", marginRight: "auto"}} >Записатися на сеанс</Button>
                        </Col>
                        <div className="justify-content-end" style={{marginLeft: 10, marginRight: 40, textAlign: "right"}}>
                            <div >
                                <h4>Пн-Нд 11:00-20:00</h4>
                            </div>
                            <Row className="justify-content-center"  >
                                <Col className="col my-auto" md={{ span: 1, offset: 1 }} lg="1" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </Col>
                                <Col >
                                    <h4>+380974839217</h4>
                                </Col>
                                <br />
                            </Row>

                        </div>
                    </Row>
                    <br />
                </div>
            </div>
            <br />
            <Cards  />
        </div>
    );
};

export default Home;