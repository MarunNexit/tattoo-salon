import React from 'react';
import Portfolio_Card from "../card/Portfolio_Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const itemList = [
    {id: 1, imgurl: "img/portf_1.jpg"},
    {id: 2,imgurl: "img/portf_2.jpg"},
    {id: 3,imgurl: "img/portf_3.jpg"}
];

const Portfolio = () => {
    return (
        <div className="container">
            <Row xs={1} md={3}  className="g-5 m-5">
            {itemList.map(item => {
                return(
                    <Col >
                        <Portfolio_Card key={item.id} card={item}/>
                    </Col>
                )
            })
            }
            </Row>
        </div>
    );
};

export default Portfolio;