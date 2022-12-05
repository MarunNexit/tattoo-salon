import React from "react";
import {useContext} from "react";
import {firebaseService} from "../../../FirebaseService";
import {UserContext} from "../../context/UserContext";
import {NavDropdown} from "react-bootstrap";
import {LOCALSTORE_USER} from "../../models/Сonstants";
import {Link} from "react-router-dom";

const Profile = () => {
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
        window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(""));
    };



    return (
        <NavDropdown title="Профіль" id="basic-nav-dropdown">
            <NavDropdown.Item as={ Link } to="/editgallery">Редагування галереї</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={e => logOut(e)}>Вийти</NavDropdown.Item>
        </NavDropdown>
    )
}

export {Profile}