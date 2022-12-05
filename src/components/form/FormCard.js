import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, Col} from "react-bootstrap";
import Message from "../shared/message/Message";
import {useAuthorContext} from "../context/AuthorContext";

const FormCard = (props) => {

    const {author, setAuthor} = useAuthorContext();

    const [isMessage, setIsMessage] = useState(false);
    const [message, setMessage] = useState({});


    const [file, setFile] = useState("");

    const initialFormData = Object.freeze({
        master: 2
    });

    const [formData, updateFormData] = React.useState(initialFormData);



    const handleChange = (e) => {
        if(e.target.name === "master")
        {
            {Array.from(author).map((item) => {
                if(item.name === e.target.value.trim())
                {
                    updateFormData({
                        ...formData,

                        [e.target.name]: item.id
                    });
                }
            })}
        }
        else{
            updateFormData({
                ...formData,

                [e.target.name]: e.target.value.trim()
            });updateFormData({
                ...formData,

                [e.target.name]: e.target.value.trim()
            });
        }
    };


    const UploadData = ({target: {files}}) => {
        setFile(files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCard(file, formData);
    };

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        props.editCard(file, formData);
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
            {props.editing === false?
                <h2><br />Додавання нового тату<br /><br /></h2>
                :<h2><br />Редагування тату<br /><br /></h2>
            }

            <Form className="col-lg-6">
                <Form.Group as={Col} controlId="formGridTattooMaster" className={"text-start"}>
                    <Form.Label>Тату-мастер</Form.Label>
                    <Form.Select  onChange = {handleChange} name = "master">
                        {Array.from(author).map((item) => (
                                <option key={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <br />
                <Form.Group controlId="formFile" className={"text-start"}>
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control accept=".png, .jpg, .jpeg" type="file" onChange={UploadData}  name = "file" />
                </Form.Group>
                <br />
                {props.editing === false?
                    <Button variant="danger" type="submit" onClick={handleSubmit}>
                        Відправити
                    </Button>
                    :
                    <Button variant="danger" type="submit" onClick={handleSubmitEdit}>
                        Редагувати
                    </Button>
                }
            </Form>
        </div>
    );
};

export default FormCard;