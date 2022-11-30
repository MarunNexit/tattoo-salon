import React, { useContext, useEffect } from "react";
import {Navbar, Container, Nav, Button, NavDropdown} from "react-bootstrap";
import { firebaseService } from "../../FirebaseService";
import { Link } from "react-router-dom";
import '../../App.css';
import { UserContext } from "../context/UserContext";


const Menu = () => {

    const { user, setUser } = useContext(UserContext);
    const logOut = (e) => {
        firebaseService.logout()
            .then(() => {
                setUser({
                    email: "",
                    password: "",
                    auth: null,
                    firebaseUser: null,
                });
            });
    };

    function changeBackgroundRed(e) {
        e.target.style.background = 'darkred';
        e.target.style.color = 'white';
    }
    function changeBackgroundWhite(e) {
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

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
                        <Nav.Link  as={ Link } to="/gallery">Галерея</Nav.Link>
                        <Nav.Link  as={ Link } to="/about">Про нас</Nav.Link>
                        <Nav.Link  as={ Link } to="/contact">Контакти</Nav.Link>
                        <Nav.Link></Nav.Link>
                        { user.email.length > 6 ?
                            <>
                                <NavDropdown title={user.email} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Редагування галереї</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Щось</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={e => logOut(e)}>Вийти</NavDropdown.Item>
                                </NavDropdown>
                            </>
                            : ""
                        }
                        <Button as={ Link } to="/appointment" variant="light" size={"lg"} onMouseOver={changeBackgroundRed} onMouseOut={changeBackgroundWhite} >Записатися на сеанс</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;