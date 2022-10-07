import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../App.css';
;

const Menu = () => {
    return (
        <Navbar expand="lg" bg="dark"  variant="dark">
            <Container>
                <Navbar.Brand href="/" className="navbar-brand">NexiTattoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="navbar navbar-dark bg-dark">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="/portfolio">Портфоліо</Nav.Link>
                        <Nav.Link href="/about">Про нас</Nav.Link>
                        <Navbar.Text>
                            Зареєстровано як: <a href="/">Мар'ян Мацькевич</a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;