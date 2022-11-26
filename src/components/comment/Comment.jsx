import React, { useEffect } from "react";

function Comment(props) {

    const { prop1, prop2 } = props;

    useEffect(() => {
        console.log('Це хук завжди запускатиметься під час  завантаження та зміні props ,{{ComponentDidMount}}');
    });

    useEffect(() => {
        console.log('Це спрацює лише один раз перед завершенням компоненту{{ComponentWillUnMount}}');
    }, []);

    useEffect(() => {
        console.log('Це спрацює, коли prop1 зміниться {{componentDidUpdate}}');
    }, [prop1])

    useEffect(() => {
        console.log('Це спрацює, коли prop2 зміниться {{componentDidUpdate}}');
    }, [prop2])

    return(
        <p>{prop1}: {prop2}</p>
    );
}
export default Comment;
