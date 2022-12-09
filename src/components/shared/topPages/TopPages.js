import React, {useEffect} from 'react';

const TopPages = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={"topBanner"} style={{ height: '22vh', width: '100%',
            backgroundImage: `url(${props.img})`}}>
            <h1 className={"topBannerBot"} style={{textAlign: "start",  width: '70%', marginLeft: "80px"}}>{props.text}</h1>
        </div>
    );
};

export default TopPages;