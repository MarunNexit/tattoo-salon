import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function NewCalendar(props) {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        props.GetDay(value);
    }, [value])


    return (
        <div>
            <Calendar onChange={setValue} value={value} />
        </div>
    );
}

export default NewCalendar;