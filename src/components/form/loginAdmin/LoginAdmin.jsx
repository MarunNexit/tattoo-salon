import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { firebaseService } from "../../../FirebaseService";
import {UserContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";
import TopPages from "../../shared/topPages/TopPages";

const LoginAdmin = () => {
    const { user, setUser } = useContext(UserContext);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");

    const [emailError, setEmailError] = useState("");
    const [emailSuccess, setEmailSuccess] = useState("");
    const [passError, setPassError] = useState("");


    const login = (e) => {
        e.preventDefault();

        firebaseService.login(emailInput, passInput)
            .then(userAuth => {
                setUser({...user, email: emailInput, auth: userAuth });
                firebaseService.saveUser(emailInput, userAuth.user.uid);
                userRoute();
            }).catch(err => {
            console.log(err);
        });

    }

    const forgotPassword = (e) => {
        e.preventDefault();
        setEmailSuccess("");
        setEmailError("");
        if (emailInput.length < 6) {
            setEmailError("Введіть коректну адресу пошти");
            return;
        }
        firebaseService.sendPasswordResetEmail(emailInput)
            .then(() => {
                setEmailSuccess("Посилання для створення паролю відіслано на пошту");
            }).catch(() => {
            setEmailError("Невірна Email адреса");
        })
    }


    let navigate = useNavigate();
    const userRoute = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <div className="main-min-height row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <div className="row">
                    <div className="col-12">
                        <br />
                        <h3>{"Увійти"}</h3>
                    </div>
                </div>
                <Form className="row" noValidate>
                    <Form.Group className="mb-2 col-12" controlId="formLoginEmail">
                        <Form.Label className="float-start">Email</Form.Label>
                        <Form.Control type="email" placeholder="Email"
                                      value={emailInput}
                                      onChange={e => setEmailInput(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Корпоративна пошта
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>{emailSuccess}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2 col-12" controlId="formLoginPassword">
                        <Form.Label className="float-start">Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль"
                                      value={passInput}
                                      onChange={e => setPassInput(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {passError}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="col-6">
                        <Button variant="link" type="button" onClick={e => forgotPassword(e)}>
                            Забули пароль?
                        </Button>
                    </div>
                    <div className="col-6"></div>

                    <div className="mt-1 col-12">
                        <Button variant="primary" type="submit" className="float-end" onClick={e => login(e)}>
                            Відіслати
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default LoginAdmin;
