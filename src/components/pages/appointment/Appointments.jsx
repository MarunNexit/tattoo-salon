import React, {useEffect} from 'react';
import FormMain from "../../form/FormMain";
import TopPages from "../../shared/topPages/TopPages";


const Appointments = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container-fluid">
            <TopPages text={"Запис на прийом"} img={"img/top/top_backgr.jpg"}/>
            <div >
                <FormMain state={true}/>
            </div>
        </div>
    );
};

export default Appointments;
