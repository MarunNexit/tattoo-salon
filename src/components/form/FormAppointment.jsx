import React from 'react';
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";

const FormAppointment = () => {

    const initialFormData = Object.freeze({
        FirstName: "",
        LastName: "",
        email: "",
        mobile: "",
        master: "Будь-який",
        location: "",
        color: "Ще не вирішив",
        message: "",
    });

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_tigp3ki';
        const serviceID = "service_kurisuTattoo";
        sendFeedback(serviceID, templateId, {
            FirstName: formData.FirstName, LastName: formData.LastName, email: formData.email, mobile: formData.mobile, master: formData.master,location: formData.location,color: formData.color,message: formData.message})
        console.log(formData);
    };

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    return (
        <div className="row justify-content-sm-center">
            <h2>Запис на прийом<br /><br /></h2>
            <Form className="col-lg-6">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName" className={"text-start"}>
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type="text" placeholder="Андрій" onChange= {handleChange} name="FirstName"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName" className={"text-start"}>
                        <Form.Label>Прізвище</Form.Label>
                        <Form.Control type="text" placeholder="Згоба" onChange= {handleChange} name="LastName"/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className={"text-start"}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@domain.com" onChange= {handleChange} name = "email"/>
                    </Form.Group>
                    <br /><br />
                    <Form.Group as={Col} controlId="formGridPhone" className={"text-start"}>
                        <Form.Label>Номер телефону</Form.Label>
                        <Form.Control type="tel" placeholder="+380963423175" onChange= {handleChange} name = "mobile"/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTattooMaster" className={"text-start"}>
                        <Form.Label>Тату-мастер</Form.Label>
                        <Form.Select defaultValue="Будь-який" onChange= {handleChange} name = "master">
                            <option>Будь-який</option>
                            <option>Софія Богданова</option>
                            <option>Арсен Коваль</option>
                            <option>Денис Овчаренко</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBodyLocation" className={"text-start"}>
                        <Form.Label>Розташування тату</Form.Label>
                        <Form.Control type="text" placeholder = "Частина тіла" onChange= {handleChange} name = "location" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTattooColor" className={"text-start"}>
                        <Form.Label>Чорне, сіре чи кольорове тату</Form.Label>
                        <Form.Select defaultValue="Вибір..." onChange= {handleChange} name = "color" >
                            <option>Ще не вирішив</option>
                            <option>Чорне</option>
                            <option>Сіре</option>
                            <option>Кольорове</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3, text-start" controlId="formGridMessage">
                    <Form.Label>Повідомлення</Form.Label>
                    <Form.Control as="textarea"
                                  placeholder="Leave a comment here" name = "message"
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

export default FormAppointment;