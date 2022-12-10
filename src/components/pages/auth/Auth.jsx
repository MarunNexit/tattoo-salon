import React, {useEffect} from 'react';
import TopPages from "../../shared/topPages/TopPages";
import LoginAdmin from "../../form/loginAdmin/LoginAdmin";


const Auth = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container-fluid">
            <TopPages text={"Авторизація"} img={"img/top/top_backgr.jpg"}/>
            <div >
                <LoginAdmin />
            </div>
        </div>
    );
};

export default Auth;
