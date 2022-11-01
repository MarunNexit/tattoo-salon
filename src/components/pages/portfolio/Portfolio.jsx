import React, {useState} from 'react';
import Portfolio_Card from "../../card/Portfolio_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";

const itemList = [
    {id: 1,imgurl: "img/portf_1.jpg"},
    {id: 2,imgurl: "img/portf_2.jpg"},
    {id: 3,imgurl: "img/portf_3.jpg"}
];

const Portfolio = () => {
    const [itemsToSell, setItemsToSell] = useState(itemList);
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
    getLocalStore();
    const addItem = (cardItem) => {
        setTotalItems([...totalItems, cardItem]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
    };
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
    const setSortTotalItems = (cards) => {
        setItemsToSell(cards);
    }


    return (
        <div className="container">
            <Row xs={1} md={3}  className="g-5 m-5">
            {itemList.map(item => {
                return(
                    <Col>
                        {/* eslint-disable-next-line react/jsx-pascal-case */}
                        <Portfolio_Card key={item.id} card={item}/>
                    </Col>
                )
            })}
            </Row>
        </div>
    );
};



export default Portfolio;