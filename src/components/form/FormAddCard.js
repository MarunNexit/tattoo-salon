import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import Message from "../message/Message";
import {LOCALSTORE_TOTALITEMS} from "../models/Сonstants";
import {firebaseService} from "../../FirebaseService";
import {collection} from "firebase/firestore/lite";



const FormAppointment = (props) => {

    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");

    const [isSend, setIsSend] = useState(false);

    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState({});
    const [shows, setShows] = useState(true);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const check = (e) => {
        e.preventDefault();

        let isError = false;
        setEmailError("");
        setNameError("");
        setMobileError("");
        setSurnameError("");
        setIsSend(true);
        if (formData["master"].length < 2) {
            // setIsMessage(true);
            // setMessage({type: "danger", heading:"Помилка", text: "Невірний тип електронної пошти, використайте пошту університету"});
            setEmailError("Введіть email університету '@nung.edu.ua'");
            isError = true;
        }
        if (formData["imgurl"].length < 2) {
            setNameError("Введіть Ім'я");
            isError = true;
        }
        if (isError) {
            return false;
        }
        else{
            return true;
        }
    }

    const initialFormData = Object.freeze({
        master: "",
        file: "",
    });

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        console.log(e.target.value.trim())
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
        console.log(e.target.name)
        console.log(e.target.value.trim())
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCard(formData);
    };


    const MessageChange = () => {
        setIsMessage(false)
    }



    return (
        <div className="row justify-content-sm-center">

            {isMessage ?
                <div className="col-12 align-self-start">
                    <Message type={message.type} heading={message.heading} text={message.text} shows={message.shows} setIsMessage={MessageChange}/>
                </div>
                : ""
            }

            <h2><br />Додавання нового тату<br /><br /></h2>
            <Form className="col-lg-6">
                <Form.Group as={Col} controlId="formGridTattooMaster" className={"text-start"}>
                    <Form.Label>Тату-мастер</Form.Label>
                    <Form.Select defaultValue="Софія Богданова" onChange= {handleChange} name = "master">
                        <option>Софія Богданова</option>
                        <option>Арсен Коваль</option>
                        <option>Денис Овчаренко</option>
                    </Form.Select>
                </Form.Group>
                <br />
                <Form.Group controlId="formFile" className={"text-start"}>
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" name = "file" onChange= {handleChange} />
                </Form.Group>
                <br />
                <Button variant="danger" type="submit" onClick={handleSubmit}>
                    Відправити
                </Button>
            </Form>
        </div>
    );
};

export default FormAppointment;