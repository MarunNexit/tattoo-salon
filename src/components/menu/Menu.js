import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../App.css';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar expand="lg" bg="dark"  variant="dark">
            <Container>
                <Navbar.Brand> <Link to ={"/"} className="navbar-brand">NexiTattoo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="navbar navbar-dark bg-dark">
                        <Nav.Link><Link to ={"/"} className="newlink">Головна</Link></Nav.Link>
                        <Nav.Link><Link to ={"/portfolio"} className="newlink">Портфоліо</Link></Nav.Link>
                        <Nav.Link><Link to ={"/about"} className="newlink">Про нас</Link></Nav.Link>
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