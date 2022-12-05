import React, {useEffect} from 'react';

const TopPages = (headText) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={"topBanner"} style={{ height: '22vh', width: '100%',
            backgroundImage: `url(${"img/top/top_backgr.jpg"})`}}>
            <h1 className={"topBannerBot"} style={{textAlign: "start",  width: '70%', marginLeft: "80px"}}>{headText.text}</h1>
        </div>
    );
};

export default TopPages;