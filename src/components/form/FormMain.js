import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, CardImg, Col, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import Message from "../shared/message/Message";
import {useAuthorContext} from "../context/AuthorContext";
import {firebaseService} from "../../FirebaseService";
import {LOCALSTORE_TOTALITEMS} from "../models/Сonstants";
import NewCalendar from "./calendar/NewCalendar";
import Nav from "react-bootstrap/Nav";

const FormMain = (props) => {

    const {author, setAuthor} = useAuthorContext();

    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");

    const [isSend, setIsSend] = useState(false);

    const [isAppointment, setIsAppointment] = useState(props.state);

    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState({});

    const [authorMass, SetAuthorMass] = useState([]);
    const [selecting, SetSelecting] = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function getAuthor() {
        firebaseService.getTattoo("author").then((doc) => {
            setAuthor([...doc]);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getAuthor();
        getLocalStore();
    }, [])

    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        let cards = "Немає вподобаних тату";
        if(cardsLocal === null){
            return (cards);
        }
        else
        {
            cardsLocal = cardsLocal[2] ? JSON.parse(cardsLocal) : cardsLocal;
            let cards = "Немає вподобаних тату";
            console.log(cardsLocal)
            if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
                cards = cardsLocal.map((item, index) => {
                    console.log(cardsLocal)
                    return(
                        <Nav.Item key={index} className={selecting === item.id._key.path.segments[6] ? '' : 'galleryopacity'}>
                            <Nav.Link className={'gallerylink'}>
                                <CardImg variant="top" src={item.url} onClick={(() => ChangeExample(item))}></CardImg>{item.name}</Nav.Link>

                        </Nav.Item>
                    );
                });
            }
            return (cards);
        }
    };

    function ChangeExample(item) {
        if(item.id._key.path.segments[6] === selecting)
        {
            SetSelecting("");
            updateFormData({
                ...formData,

                ["example"]: ""
            });
        }
        else
        {
            SetSelecting(item.id._key.path.segments[6]);
            updateFormData({
                ...formData,

                ["example"]: item.url
            });
        }
    }


    const check = (e) => {
        e.preventDefault();
        let isError = false;
        setEmailError("");
        setNameError("");
        setMobileError("");
        setSurnameError("");
        setIsSend(true);
        if(isAppointment){
            if (!isValidEmail(formData["email"])) {
                setEmailError("Введіть правильний email");
                isError = true;
            }
            if (formData["FirstName"].length < 2) {
                setNameError("Введіть Ім'я");
                isError = true;
            }
            if (formData["LastName"].length < 2) {
                setSurnameError("Введіть Прізвище");
                isError = true;
            }
            if (formData["mobile"].length < 10) {
                console.log(formData["mobile"]);
                setMobileError("Введіть номер телефону");
                isError = true;
            }
            if (isError) {
                return false;
            }
            else{
                return true;
            }
        }
        else{
            if (!isValidEmail(formDataContact["email"])) {
                // setIsMessage(true);
                // setMessage({type: "danger", heading:"Помилка", text: "Невірний тип електронної пошти, використайте пошту університету"});
                setEmailError("Введіть email університету '@nung.edu.ua'");
                isError = true;
            }
            if (formDataContact["FirstName"].length < 2) {
                setNameError("Введіть Ім'я");
                isError = true;
            }
            if (formDataContact["LastName"].length < 2) {
                setSurnameError("Введіть Прізвище");
                isError = true;
            }
            if (formDataContact["mobile"].length < 10) {
                setMobileError("Введіть номер телефону");
                isError = true;
            }
            if (isError) {
                return false;
            }
            else{
                return true;
            }
        }
    }


    const initialFormData = Object.freeze({
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",
        master: "Будь-який",
        location: "",
        color: "Ще не вирішив",
        example: "",
        data: "",
        message: "",
    });


    const initialFormDataContact = Object.freeze({
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [formDataContact, updateFormDataContact] = React.useState(initialFormDataContact);
    const [formData, updateFormData] = React.useState(initialFormData);
    const [count, SetCount] = React.useState(0);

    const handleChange = (e) => {
        console.log(e.target.value.trim())
        if(e.target.name === "mobile")
        {
            e.target.value = e.target.value.replace(/\D/g, '');
            updateFormData({
                ...formData,

                [e.target.name]: e.target.value
            });
        }
        else if(e.target.name === "master")
        {
            {authorMass.map((item) => {
                if(item.name === e.target.value.trim())
                {
                    SetCount(count+1);
                    console.log("change master");
                    updateFormData({
                        ...formData,

                        [e.target.name]: item.id
                    });
                }
                if(count === 0)
                {
                    console.log("0");
                    updateFormData({
                        ...formData,

                        [e.target.name]: 0
                    });
                }
            })}
            SetCount(0);
        }
        else if(isAppointment) {
            updateFormData({
                ...formData,

                [e.target.name]: e.target.value.trim()
            });
        }
        else
        {
            updateFormDataContact({
                ...formDataContact,

                [e.target.name]: e.target.value.trim()
            });
        }
        console.log(e.target.name)
        console.log(formData)
        console.log(e.target.value.trim())
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(check(e)){
            if(isAppointment){
                const templateId = 'template_tigp3ki';
                const serviceID = "service_kurisuTattoo";
                sendFeedback(serviceID, templateId, {
                    FirstName: formData.FirstName, LastName: formData.LastName, email: formData.email, mobile: formData.mobile, master: formData.master,location: formData.location,color: formData.color,example: formData.example, data:formData.data,message: formData.message})
                console.log(formData);
                setIsMessage(true);
                setMessage({type: "success", heading:"Успіх", text: "Дякуємо за запис на сеанс", shows: true});
            }
            else{
                const templateId = 'template_lezk33b';
                const serviceID = "service_kurisuTattoo";
                sendFeedback(serviceID, templateId, {
                    FirstName: formDataContact.FirstName, LastName: formDataContact.LastName, email: formDataContact.email, mobile: formDataContact.mobile,message: formDataContact.message})
                console.log(formDataContact);
                setIsMessage(true);
                setMessage({type: "success", heading:"Успіх", text: "Запитання надіслано", shows: true});
            }
        }
        else
        {
            MessageChange();
        }
    };

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email успішно відправлено!')
        })
            .catch(err => console.error('Виникла помилка.', err))
    }

    const MessageChange = () => {
        setIsMessage(false)
    }


    const GetDay = (data) => {
        updateFormData({
            ...formData,

            ["data"]: data
        });
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <ul className={"justify-content-start"} style={{fontSize: 18}}>
                <li>
                    Чорне – 11 гривень за кв. см.
                </li>
                <li>
                    Кольорове – 15 гривень за кв. см.
                </li>
            </ul>
        </Tooltip>
    );

    return (
        <div className="row justify-content-sm-center">

            {isMessage ?
                <div className="col-12 align-self-start">
                    <Message type={message.type} heading={message.heading} text={message.text} shows={message.shows} setIsMessage={MessageChange}/>
                </div>
                : ""
            }
            {isAppointment ?
            <h2><br />Запис на прийом<br /><br /></h2>
                : <h2><br />Виникли якісь запитання ?<br /><br /></h2>
            }
            <Form className="col-lg-6">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName" className={"text-start"}>
                        <Form.Label>Ім'я*</Form.Label>
                        <Form.Control type="text" placeholder="Андрій" onChange= {handleChange} name="FirstName"
                                      isValid={isSend && nameError.length === 0}
                                      isInvalid={isSend && nameError.length > 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            {nameError}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName" className={"text-start"}>
                        <Form.Label>Прізвище*</Form.Label>
                        <Form.Control type="text" placeholder="Згоба" onChange= {handleChange} name="LastName"
                                      isValid={isSend && surnameError.length === 0}
                                      isInvalid={isSend && surnameError.length > 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            {surnameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className={"text-start"}>
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="example@domain.com" onChange= {handleChange} name = "email"
                                      isValid={isSend && emailError.length === 0}
                                      isInvalid={isSend && emailError.length > 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br /><br />
                    <Form.Group as={Col} controlId="formGridPhone" className={"text-start"}>
                        <Form.Label>Номер телефону*</Form.Label>
                        <Form.Control type="tel" placeholder="38096342..." onChange= {handleChange} name = "mobile"
                                      isValid={isSend && mobileError.length === 0}
                                      isInvalid={isSend && mobileError.length > 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            {mobileError}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {isAppointment ?
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTattooMaster" className={"text-start"}>
                        <Form.Label>Тату-мастер</Form.Label>
                        <Form.Select defaultValue="Будь-який" onChange= {handleChange} name = "master">
                            <option >Будь-який</option>
                            {Array.from(author).map((item) => {
                                return(
                                    <option key={item.id} >{item.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBodyLocation" className={"text-start"}>
                        <Form.Label>Розташування тату</Form.Label>
                        <Form.Control type="text" placeholder = "Частина тіла" onChange= {handleChange} name = "location"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTattooColor" className={"text-start"}>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                        <Form.Label>Колір тату (і)</Form.Label>
                        </OverlayTrigger>
                        <Form.Select defaultValue="Вибір..." onChange= {handleChange} name = "color">
                            <option>Ще не вирішив</option>
                            <option>Чорне</option>
                            <option>Кольорове</option>
                        </Form.Select>
                    </Form.Group>
                </Row> : null }

                {isAppointment ?
                    <Row xs={1} md={2}  className="g-5 justify-content-center">
                        <Col>
                            <Form.Group as={Col} controlId="formExampleTattoo" className={"text-start"}>
                                <Form.Label>Приклад тату</Form.Label>
                                <Row xs={1} md={2}  className="g-5 justify-content-center">
                                    <br/><br/>
                                    {getLocalStore()}
                                </Row>
                                <div className="row">
                                </div>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formGridTattooColor" className={"text-start"}>
                                <Form.Label>Календар</Form.Label>
                                <div>
                                    <NewCalendar GetDay={GetDay}/>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                     : null }

                <br />
                <Form.Group className="mb-3, text-start" controlId="formGridMessage">
                    <Form.Label>Повідомлення</Form.Label>
                    <Form.Control as="textarea"
                                  placeholder="Напишіть повідомлення тут" name = "message"
                                  style={{ height: '100px' }} onChange= {handleChange}/>
                </Form.Group>
                <br />
                <Button variant="danger" type="submit" onClick={handleSubmit}>
                    Відправити
                </Button>
            </Form>
        </div>
    );
};

export default FormMain;



