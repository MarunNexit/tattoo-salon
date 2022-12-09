import Gallery_Card from "../../card/Gallery_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useEffect, useState} from "react";
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import Nav from 'react-bootstrap/Nav';
import TopPages from "../../shared/topPages/TopPages";
import GalleryLike from "./GalleryLike";
import Button from "react-bootstrap/Button";
import {firebaseService} from "../../../FirebaseService";
import ShowMaster from "../../shared/showMaster/ShowMaster";
import {useAuthorContext} from "../../context/AuthorContext";



const Gallery = () => {

    const {author, setAuthor} = useAuthorContext();

    const [authorId, setAuthorId] = useState(0);
    const [totalItems, setTotalItems] = useState([]);
    const [selectAuthor, setSelectAuthor] = useState(false);
    const [data, setData] = useState({})

    function getData()
    {
        firebaseService.getTattoo("tattoo").then((item) => {
            setData(item);
        }).catch(err => {
            console.log(err);
        });
    }

    const getLocalStore = () => {
        if (totalItems && totalItems.length > 0) {
            return;
        }
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            setTotalItems([...cardsLocal]);
        }
    };

    useEffect(()=>{
        window.scrollTo(0, 0)
        getData()
        getLocalStore();
    },[]);

    useEffect(()=>{
        if(totalItems.length > 0)
            window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
    }, [totalItems]);


    const AddNew = (item) => {
        let num = 0;
        totalItems.forEach((itemF, indexF) => {
            if (itemF.id._key.path.segments[6] === item.id._key.path.segments[6]) {
                num++;
            }
        });
        if(num === 0) {
            setTotalItems([...totalItems, item]);
            totalItems.concat(item)
            window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
        }
    }

    const removeItem = (cardItem) => {
        let foundItemIndex;
        totalItems.forEach((item, index) => {
            if (item.id._key.path.segments[6] === cardItem.id._key.path.segments[6]) {
                foundItemIndex = index;
            }
        });
        totalItems.splice(foundItemIndex, 1);
        setTotalItems([...totalItems]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));

    };

    function ChangeAuthorId(id)
    {
        setAuthorId(id);
    }

    return (
        <div className="container-fluid">
            <TopPages text={"Галерея"} img={"img/top/top_backgr.jpg"}/>
            <br />
            <Nav className="justify-content-center" defaultActiveKey="/gallery" as="ul">
                <Nav.Item as="li">
                    <Button variant="primary" variant="danger" onClick={() => setSelectAuthor(!selectAuthor)}>
                        Майстри
                    </Button>
                </Nav.Item>
                <Nav.Item as="li">
                    <GalleryLike/>
                </Nav.Item>
            </Nav>
            {selectAuthor ?
                <ShowMaster author={author} authorId={authorId} ChangeAuthorId={ChangeAuthorId} />
                : null
            }

        <div className="container" >
            <Row xs={1} md={3}  className="g-5 m-5">
                {Array.from(data).map((item, index) => {
                    if(authorId === 0) {
                        return(
                            <Col key={index}>
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <Gallery_Card card={item} getItem={AddNew} edit={false}
                                              removeItem={removeItem} />
                            </Col>
                        )
                    }
                    else if (authorId === item.authorId) {
                        return (
                            <Col key={index}>
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <Gallery_Card card={item} getItem={AddNew} edit={false}
                                              removeItem={removeItem}/>
                            </Col>
                        )
                    }
                    return null;
                })}
            </Row>
        </div>

        </div>
    );
};



export default Gallery;