import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
        console.log("as");
    }

    return (
        <div>
            <div className="footer-bg" style={{
                backgroundImage: `url(${"img/footer.jpg"})`,
                hight: 'auto',
                minHeight: '100%',
                alignItems:'center'
            }}>
                <div className={"banner_footer"}>
                    <br />    <br />
                    <h1 style={{
                        fontFamily: "Permanent Marker",
                        color: "red",
                        textAlign: "center",
                        marginTop: "-50px" }}>
                        Kurisu Tattoo
                    </h1>
                    <div>
                        <Container>
                        <Row xs={1}  className="g-5 m-5">
                            <Column>
                                <FooterLink as={ Link } to="/" onClick={scrollTop}>Головна</FooterLink>
                                <FooterLink as={ Link } to="/about" onClick={scrollTop}>Про нас</FooterLink>
                            </Column>
                            <Column>
                                <FooterLink as={ Link } to="/gallery" onClick={scrollTop}>Галерея</FooterLink>
                                <FooterLink as={ Link } to="/appointment" onClick={scrollTop}>Записатися на прийом</FooterLink>
                            </Column>
                            <Column>
                                <FooterLink as={ Link } to="/enter" onClick={scrollTop}>Для адміністраторів</FooterLink>
                                <FooterLink as={ Link } to="/loginadm" onClick={scrollTop}>Ahemdabad</FooterLink>
                            </Column>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>

                <Container>
                    <Row>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </div>
    );
};
export default Footer;