import React, {useEffect} from 'react';
import Nav from "react-bootstrap/Nav";
import {Image} from "react-bootstrap";

const ShowMaster = (props) => {
    return (
        <Nav className="justify-content-center" defaultActiveKey="/gallery" style={{display: "flex"}}>
            <Nav.Item className={props.authorId === 0 ? '' : 'galleryopacity'}>
                <Nav.Link className={'gallerylink'} onClick={() => props.ChangeAuthorId(0)}><Image
                    roundedCircle={true}
                    style={{display: "block", width: 180, padding: 15, marginRight: 20, marginLeft: 20}}
                    src="img/gallery/All.jpg"></Image></Nav.Link>
            </Nav.Item>
            {Array.from(props.author).map((item, index) => {
                {console.log(item)}
                return (
                    <Nav.Item key={index} className={props.authorId === item.id ? '' : 'galleryopacity'}>
                        <Nav.Link className={'gallerylink'} onClick={() => props.ChangeAuthorId(item.id)}>
                            <Image roundedCircle={true} style={{display:"block",width:"22vh",height:"22vh",fill:"currentColor",boxSizing:"0 0 16 16", padding: 15, marginRight: 20, marginLeft: 20}}
                                   src={item.headimg}></Image>{item.name}</Nav.Link>
                    </Nav.Item>
                )
            })
            }
        </Nav>
    );
};

export default ShowMaster;