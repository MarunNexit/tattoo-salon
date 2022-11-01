import React from 'react';
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../App.css';

const Menu = () => {
    return (
        <Navbar expand="lg" bg="dark"  variant="dark">
            <Container>
                <Navbar.Brand as={ Link } to="/" className="navbar-brand">
                    <img
                    src="/img/newmainlogo.png"
                    width="175"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="navbar navbar-dark bg-dark">
                        <Nav.Link as={ Link } to="/">Головна</Nav.Link>
                        <Nav.Link  as={ Link } to="/portfolio">Портфоліо</Nav.Link>
                        <Nav.Link  as={ Link } to="/about">Про нас</Nav.Link>
                        <Nav.Link> <Button as={ Link } to="/appointment" variant="light" size={"lg"}>Записатися на сеанс</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;