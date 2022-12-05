import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {Link} from "react-router-dom";

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
        console.log("as");
    }

    return (
        <div>
            <div className="footer-bg" style={{
                backgroundImage: `url(${"img/footer/footer.jpg"})`,
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
                        <Row xs={1}  className="g-5 m-5 justify-content-md-centre">
                            <Column className="text-center" >
                                <FooterLink as={ Link } to="/" onClick={scrollTop}>Головна</FooterLink>
                                <FooterLink as={ Link } to="/about" onClick={scrollTop}>Про нас</FooterLink>
                            </Column>
                            <Column className="text-center" >
                                <FooterLink as={ Link } to="/gallery" onClick={scrollTop}>Галерея</FooterLink>
                                <FooterLink as={ Link } to="/appointment" onClick={scrollTop}>Записатися на прийом</FooterLink>
                            </Column>
                            <Column className="text-center" >
                                <FooterLink as={ Link } to="/contact" onClick={scrollTop}>Контакти</FooterLink>
                                <FooterLink as={ Link } to="/loginadm" onClick={scrollTop}>Для адміністраторів</FooterLink>
                            </Column>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
            </div>
    );
};
export default Footer;
