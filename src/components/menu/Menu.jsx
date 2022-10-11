import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../App.css';

const Menu = () => {
    return (
        <Navbar expand="lg" bg="dark"  variant="dark">
            <Container>
                <Navbar.Brand href="/" className="navbar-brand">
                    <img
                    src="/newmainlogo.png"
                    width="175"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="navbar navbar-dark bg-dark">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="/portfolio">Портфоліо</Nav.Link>
                        <Nav.Link href="/about">Про нас</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;