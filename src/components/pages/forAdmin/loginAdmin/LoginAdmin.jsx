import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { firebaseService } from "../../../../FirebaseService";
import Message from "../../../message/Message"
import {UserContext} from "../../../context/UserContext";
import Home from "../../home/Home";
import {Route, Routes} from "react-router-dom";

const LoginAdmin = () => {
    const { user, setUser } = useContext(UserContext);
    console.log("user", user);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");

    const [isSignup, setIsSignup] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [emailSuccess, setEmailSuccess] = useState("");
    const [passError, setPassError] = useState("");

    const [isSend, setIsSend] = useState(false);

    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Hello = () => (
        <Routes>
        <Route render={({ history}) => (
            <button
                type='button'
                onClick={() => { history.push('/new-location') }}
            >
                Click Me!
            </button>
        )} />
        </Routes>
    )

    const login = (e) => {
        e.preventDefault();
        let isError = false;
        setEmailSuccess("");
        setEmailError("");
        setPassError("");
        setIsSend(true);
        if (isSignup) {
            if (emailInput.indexOf("@nung.edu.ua") < 0) {
                // setIsMessage(true);
                // setMessage({type: "danger", heading:"Помилка", text: "Невірний тип електронної пошти, використайте пошту університету"});
                setEmailError("Введіть email університету '@nung.edu.ua'");
                isError = true;
            }
            if (passInput.length < 5) {
                setPassError("Введіть пароль не менше 6 символів");
                isError = true;
            }
            if (isError) {
                return;
            }
            console.log("asdasd");

        } else {
            console.log("asdasd");
            firebaseService.login(emailInput, passInput)
                .then(userAuth => {
                    setUser({...user, email: emailInput, auth: userAuth });
                    firebaseService.saveUser(emailInput, userAuth.user.uid);
                }).catch(err => {
                console.log(err);
            });
        }

    }

    const loginWithGoogle = (e) => {
        e.preventDefault();
        setEmailSuccess("");
        setEmailError("");
        firebaseService.loginWithGoogle()
            .then(userAuth => {
                setUser({...user, email: userAuth.email, password: "loginWithGoogle", auth: userAuth});
                firebaseService.saveUser(userAuth.email, userAuth.uid);
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

    const setSignup = (e) => {
        e.preventDefault();
        setIsSignup(!isSignup);
    }

    return (
        <div className="main-min-height row align-items-center justify-content-center">

            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <div className="row">
                    <div className="col-12">
                        <h3>{isSignup ? "Реєстрація" : "Логін"}</h3>
                    </div>
                </div>
                <Form className="row" noValidate>
                    <Form.Group className="mb-2 col-12" controlId="formLoginEmail">
                        <Form.Label className="float-start">Email</Form.Label>
                        <Form.Control type="email" placeholder="Email"
                                      value={emailInput}
                                      onChange={e => setEmailInput(e.target.value)}
                                      isValid={isSend && emailError.length === 0}
                                      isInvalid={isSend && emailError.length > 0}
                        />
                        <Form.Text className="text-muted">
                            Корпоративний, @nung.edu.ua
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
                                      isValid={isSend && passError.length === 0}
                                      isInvalid={isSend && passError.length > 0}
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
                            <div className="col-6">
                                <Button variant="link" type="button" onClick={e => setSignup(e)}>
                                    {isSignup ? "Вже зареєстрований" : "Зареєструватись..."}
                                </Button>
                            </div>
                            <div className="col-6">
                                <Button variant="link" type="button" onClick={e => loginWithGoogle(e)}>
                            Логін з Google
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
