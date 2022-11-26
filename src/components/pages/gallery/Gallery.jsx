import Gallery_Card from "../../card/Gallery_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useEffect, useState} from "react";
import {LOCALSTORE_TOTALITEMS} from "../../models/Сonstants";
import Nav from 'react-bootstrap/Nav';
import {Image} from "react-bootstrap";
import TopPages from "../../topPages/TopPages";
import GalleryLike from "./GalleryLike";


const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [authorId, setAuthorId] = useState(0);

    const itemList = [
        {id: 1,imgurl: "img/portf_1.jpg",authorId: 1},
        {id: 2,imgurl: "img/portf_2.jpg",authorId: 2},
        {id: 3,imgurl: "img/portf_3.jpg",authorId: 3},
        {id: 4,imgurl: "img/portf_3.jpg",authorId: 3},
        {id: 5,imgurl: "img/portf_3.jpg",authorId: 3},
        {id: 6,imgurl: "img/portf_3.jpg",authorId: 3}
    ];

    const [totalItems, setTotalItems] = useState([]);

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

    useEffect(() => {
        getLocalStore();
    });

    const totalPriceClick = (item) => {
        let num = 0;
        console.log(item);
        totalItems.forEach((itemF, indexF) => {
            if (itemF.id === item.id) {
                num++;
            }
        });
        if(num === 0) {
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
    const SelectAuthor = (num) => {
        setAuthorId(num);
    };

    return (
        <div >
            <TopPages text={"Галерея"} />
            <br />
            <Nav className="justify-content-center"  defaultActiveKey="/home" style={{ display: "flex"}}>
                <Nav.Item className={authorId === 0 ? '' : 'galleryopacity'}>
                    <Nav.Link className={'gallerylink'} onClick={() => SelectAuthor(0)}><Image style={{ display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}} src="img/portf_1.jpg"></Image></Nav.Link>
                </Nav.Item>
                <Nav.Item className={authorId === 1 ? '' : 'galleryopacity'}>
                    <Nav.Link className={'gallerylink'} onClick={() => SelectAuthor(1)}><Image style={{ display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}} src="img/portf_1.jpg"></Image> Cофія Богданова </Nav.Link>
                </Nav.Item>
                <Nav.Item className={authorId === 2 ? '' : 'galleryopacity'}>
                    <Nav.Link className={"gallerylink"} onClick={() => setAuthorId(2)}><Image style={{ display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20 }} src="img/portf_2.jpg"></Image> Арсен Коваль</Nav.Link>
                </Nav.Item>
                <Nav.Item className={authorId === 3 ? '' : 'galleryopacity'}>
                    <Nav.Link className={"gallerylink"} onClick={() => setAuthorId(3)}><Image style={{ display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20 }} src="img/portf_3.jpg"></Image> Денис Овчаренко</Nav.Link>
                </Nav.Item>
            </Nav>
        <div className="container" >
            <Row xs={1} md={3}  className="g-5 m-5">
                {itemList.map((item, index) => {
                    if(authorId === 0) {
                        return(
                            <Col key={index}>
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <Gallery_Card card={item} getItem={totalPriceClick}
                                              removeItem={removeItem} />
                            </Col>
                        )
                    }
                    else if (authorId === item.authorId) {
                        return (
                            <Col key={index}>
                                {/* eslint-disable-next-line react/jsx-pascal-case */}
                                <Gallery_Card card={item} getItem={totalPriceClick}
                                              removeItem={removeItem}/>
                            </Col>
                        )
                    }
                    return null;
                })}
            </Row>
            <GalleryLike/>
        </div>
        </div>
    );
};



export default Gallery;