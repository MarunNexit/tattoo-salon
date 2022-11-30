import Gallery_Card from "../../card/Gallery_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useEffect, useState} from "react";
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import Nav from 'react-bootstrap/Nav';
import {Image} from "react-bootstrap";
import TopPages from "../../topPages/TopPages";

import Button from "react-bootstrap/Button";
import FormAddCard from "../../form/FormAddCard";

import {firebaseService} from "../../../FirebaseService";
import {collection, query} from "firebase/firestore/lite";




const EditGallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [authorId, setAuthorId] = useState(0);
    const [totalItems, setTotalItems] = useState([]);
    const [selectAuthor, setSelectAuthor] = useState(false);
    const [addNewCard, setAddNewCard] = useState(false);

    const [added, setAdded] = useState(false);


    const itemList = [
        {id: 1, imgurl: "img/portf_1.jpg", authorId: 1},
        {id: 2, imgurl: "img/portf_2.jpg", authorId: 2},
        {id: 3, imgurl: "img/portf_3.jpg", authorId: 3},
        {id: 4, imgurl: "img/portf_3.jpg", authorId: 3},
        {id: 5, imgurl: "img/portf_3.jpg", authorId: 3},
        {id: 6, imgurl: "img/portf_3.jpg", authorId: 3}
    ];

    const AddNew = (item) => {
        let num = 0;
        console.log(item);
        totalItems.forEach((itemF, indexF) => {
            if (itemF.id === item.id) {
                num++;
            }
        });
        if (num === 0) {
            setTotalItems([...totalItems, item]);
            totalItems.concat(item)
            console.log(item);
            console.log(totalItems);
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


    const initialFormData = Object.freeze({
        imgurl: "",
        authorId: "",
    });

    const [formNewData, SetFormNewData] = useState(initialFormData);


    function CreateDoc() {
        console.log("create");
        firebaseService.saveTattoo(formNewData).catch((err)=>
        {
            alert(err);
            console.error(err);
        })
    }

    const addCard = (formData) => {
        console.log(formData.file);
        console.log(formData.master);
        console.log("cardItem");
        setAdded(true);
        SetFormNewData({
            ["imgurl"]: formData.file,
            ["authorId"]: formData.master
        });
        CreateDoc();
        console.log(formNewData);
    }

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    const [data3, setData3] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData2()
    {
        console.log("start getData2");
        firebaseService.getTempValue("tattoo", "authorId", 1).then((doc) => {
            console.log("asdads");
            const items = []
            setData3([...doc]);
            console.log(items);
            console.log(doc);
            console.log(data3);
            setLoader(false);
        }).catch(err => {
            console.log(err);
        });
    }


    const deleteCard = (cardItem) => {
        firebaseService.deleteDocument("tattoo", cardItem.id)
    }


    function getData()
    {
        firebaseService.getTattoo2().then((doc) => {
            const items = []
            setData([...doc]);
            console.log(items);
            console.log(doc);
            console.log(data);
            setLoader(false);
        }).catch(err => {
            console.log(err);
        });
    }



    return (
        <div className="container-fluid">
            <TopPages text={"Редагування галереї"}/>
            <br/>
            <div>
                {data.map((item) => {
                    return (
                        <Col key={item.id}>
                            {item.imgurl}
                        </Col>
                    )
                })}
            </div>

            <div style={{border: "black 1px solid"}}>
                <h2>Список татуювань</h2>
                <Nav className="justify-content-center" defaultActiveKey="/editgallery" as="ul">
                    <Nav.Item as="li">
                        <Button variant="danger" onClick={getData2}>
                            Майстриbbb
                        </Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Button variant="danger" onClick={() => setSelectAuthor(!selectAuthor)}>
                            Майстри
                        </Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Button variant="danger" onClick={() => setAddNewCard(!addNewCard)}>
                            Додати нове тату
                        </Button>
                    </Nav.Item>
                </Nav>
                {added ?
                    <Gallery_Card card={formNewData} getItem={AddNew} edit={"true"}
                                  removeItem={removeItem} deleteCard={deleteCard}/> : null
                }
                {addNewCard ?
                    <FormAddCard addCard={addCard}/> : null
                }
                {selectAuthor ?
                    <Nav className="justify-content-center" defaultActiveKey="/gallery" style={{display: "flex"}}>
                        <Nav.Item className={authorId === 0 ? '' : 'galleryopacity'}>
                            <Nav.Link className={'gallerylink'} onClick={() => setAuthorId(0)}><Image
                                roundedCircle={true}
                                style={{display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}}
                                src="img/portf_1.jpg"></Image></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={authorId === 1 ? '' : 'galleryopacity'}>
                            <Nav.Link className={'gallerylink'} onClick={() => setAuthorId(1)}><Image
                                roundedCircle={true}
                                style={{display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}}
                                src="img/portf_1.jpg"></Image> Cофія Богданова </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={authorId === 2 ? '' : 'galleryopacity'}>
                            <Nav.Link className={"gallerylink"} onClick={() => setAuthorId(2)}><Image
                                roundedCircle={true}
                                style={{display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}}
                                src="img/portf_2.jpg"></Image> Арсен Коваль</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={authorId === 3 ? '' : 'galleryopacity'}>
                            <Nav.Link className={"gallerylink"} onClick={() => setAuthorId(3)}><Image
                                roundedCircle={true}
                                style={{display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}}
                                src="img/portf_3.jpg"></Image> Денис Овчаренко</Nav.Link>
                        </Nav.Item>
                    </Nav> : null
                }
                <div className="container">
                    <Row xs={1} md={3} className="g-5 m-5">
                        {loader === false && (data.map((tattoo) => (
                            <Col key={tattoo.id}>
                                <Gallery_Card card={tattoo} getItem={AddNew} edit={"true"}
                                              removeItem={removeItem} deleteCard={deleteCard}/>
                            </Col>

                        )))}
                        {loader === false && (data3.map((tattoo3) => (
                            <div key={tattoo3.id}>
                                <p>Name : {tattoo3.imgurl}</p>
                                <p>Name : {tattoo3.authorId}</p>
                            </div>
                        )))}
                        {itemList.map((item, index) => {
                            if (authorId === 0) {
                                return (
                                    <Col key={index}>
                                        {/* eslint-disable-next-line react/jsx-pascal-case */}
                                        <Gallery_Card card={item} getItem={AddNew} edit={"true"}
                                                      removeItem={removeItem} deleteCard={deleteCard}/>
                                    </Col>
                                )
                            } else if (authorId === item.authorId) {
                                return (
                                    <Col key={index}>
                                        {/* eslint-disable-next-line react/jsx-pascal-case */}
                                        <Gallery_Card card={item} getItem={AddNew} edit={"true"}
                                                      removeItem={removeItem} deleteCard={deleteCard}/>
                                    </Col>
                                )
                            }
                            return null;
                        })}
                    </Row>
                </div>
            </div>

        </div>
    );
};




export default EditGallery;