import Gallery_Card from "../../card/Gallery_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useContext, useEffect, useState} from "react";
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import Nav from 'react-bootstrap/Nav';
import TopPages from "../../shared/topPages/TopPages";

import Button from "react-bootstrap/Button";
import FormCard from "../../form/FormCard";

import {firebaseService} from "../../../FirebaseService";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {UserContext} from "../../context/UserContext";
import {useAuthorContext} from "../../context/AuthorContext";
import ShowMaster from "../../shared/showMaster/ShowMaster";



const EditGallery = () => {

    const {user} = useContext(UserContext)
    const {author} = useAuthorContext();

    const [editing, setEditing] = useState(false);
    const [percent, setPercent] = useState(0);

    const [authorId, setAuthorId] = useState(0);
    const [totalItems, setTotalItems] = useState([]);
    const [addNewCard, setAddNewCard] = useState(false);

    const [reload, setReload] = useState(false);

    const [data, setData] = useState({})


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const AddNew = (item) => {
        let num = 0;
        totalItems.forEach((itemF, indexF) => {
            if (itemF.id === item.id) {
                num++;
            }
        });
        if (num === 0) {
            setTotalItems([...totalItems, item]);
            totalItems.concat(item)
            window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
        }
    }

    const removeItem = (cardItem) => {
        let foundItemIndex;
        totalItems.forEach((item, index) => {
            if (item.id === cardItem.id) {
                foundItemIndex = index;
            }
        });
        totalItems.splice(foundItemIndex, 1);
        setTotalItems([...totalItems]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));

    };

    const addCard = (file, formData) => {
        if (!file) {
            alert("Виберіть правильний файл")
        }

        const storageRef = ref(firebaseService.storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        firebaseService.getTattoo("tattoo").then((item) => {
            setData(item);
        }).catch(err => {
            console.log(err);
        });

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    firebaseService.UploadData("tattoo", formData.master, url).then(() => {
                        setReload(!reload);
                    })
                });
            }
        );

    }


    useEffect(() => {
        getData()
        setAddNewCard(false);
        setEditing(false);
    }, [reload])


    useEffect(() => {
        getData()
    }, [])

    function getData()
    {
        firebaseService.getTattoo("tattoo").then((item) => {
            setData(item);
        }).catch(err => {
            console.log(err);
        });
    }

    function deleteData(card) {
        firebaseService.deleteDocument("tattoo", card.id).then(() => {
            setReload(!reload);
        })
    }

    const [formNewData, setFormNewData] = useState({})
    function editData(card)
    {
        setFormNewData(card)
        setAddNewCard(false);
        setEditing(!editing);
    }

    function ChangeAdd()
    {
        setAddNewCard(!addNewCard);
        setEditing(false);
    }

    function editCardData(file, card)
    {
        const refs = firebaseService.getTattooURL("tattoo", "id", formNewData.id).then((refs) => {
            const storageRef = ref(firebaseService.storage, `/files/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        firebaseService.editCard(refs, card.master, url).then(() => {
                            setReload(!reload);
                        })
                    });
                }
            );
        })
    }

    const [selectThisAuthor, setSelectThisAuthor] = useState(false);

    function SelectMaster()
    {
        setSelectThisAuthor(!selectThisAuthor)
    }

    function ChangeAuthorId(id)
    {
        setAuthorId(id);
    }



    return (
        <div className="container-fluid">
            {user && user.auth ?
                <div>
                    <div>
                        <TopPages text={"Редагування галереї"}/>
                        <br/>
                        {Array.from(data).map((item, idx) => {
                            return (
                                <Col key={idx}>
                                    {item.imgurl}
                                </Col>
                            )
                        })}
                    </div>

                    <div style={{border: "black 1px solid"}}>
                        <h2>Список татуювань</h2>
                        <Nav className="justify-content-center" defaultActiveKey="/editgallery" as="ul">
                            <Nav.Item as="li">
                                <Button variant="danger" onClick={SelectMaster}>
                                    Майстри
                                </Button>
                            </Nav.Item>
                            <Nav.Item as="li" style={{marginLeft: "10px"}}>
                                <Button variant="danger" onClick={ChangeAdd}>
                                    Додати нове тату
                                </Button>
                            </Nav.Item>
                        </Nav>
                        {selectThisAuthor === true ?
                            <ShowMaster author={author} authorId={authorId} ChangeAuthorId={ChangeAuthorId} /> : null
                        }
                        <div className="container">
                            <Row xs={1} md={3} className="g-5 m-5">
                                {addNewCard ?
                                    <FormCard addCard={addCard} editing={false}/> : null
                                }
                                {editing ?
                                    <FormCard editCard={editCardData} editing={true}/> : null
                                }
                                {Array.from(data).map((item, index) => {
                                    if (authorId === 0) {
                                        return (
                                            <Col key={index}>
                                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                                <Gallery_Card card={item} getItem={AddNew} edit={"true"} editData={editData}
                                                              removeItem={removeItem} deleteData={deleteData}/>
                                            </Col>
                                        )
                                    } else if (authorId === item.authorId) {
                                        return (
                                            <Col key={index}>
                                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                                <Gallery_Card card={item} getItem={AddNew} edit={"true"} editData={editData}
                                                              removeItem={removeItem} deleteData={deleteData}/>
                                            </Col>
                                        )
                                    }
                                    return null;
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
                :
                <h2>У вас немає доступу до цієї сторінки</h2>
            }
        </div>
    );
};


export default EditGallery;