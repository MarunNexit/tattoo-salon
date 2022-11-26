import React, {useEffect} from 'react';
import Col from "react-bootstrap/Col";
import Gallery_Card from "../card/Gallery_Card";

const TopPages = (headText) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={"topBanner"} style={{ height: '22vh', width: '100%',
            backgroundImage: `url(${"img/home_backgr_1.jpg"})`}}>
            <h1 className={"topBannerBot"} style={{textAlign: "center",  width: '50%'}}>{headText.text}</h1>
        </div>
    );
};

export default TopPages;