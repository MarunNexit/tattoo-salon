import {createContext, useContext, useEffect, useState} from "react";
import {firebaseService} from "../../FirebaseService";

export const AuthorContext = createContext({});

export function useAuthorContext() {
    return useContext(AuthorContext)
}


export function AuthorContextProvider({children}) {

    const [author, setAuthor] = useState({
        id: 0,
        name: "",
        headimg: "",
        descript: "",
        addimg: "",
    });

    function getAuthor() {
        firebaseService.getTattoo("author").then((doc) => {
            setAuthor([...doc]);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getAuthor();
    }, [])

    return(
        <AuthorContext.Provider
            value={{
                author, setAuthor, getAuthor
            }}>
            {children}
        </AuthorContext.Provider>
    )
}