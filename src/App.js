import './App.css';
import Menu from "./components/shared/menu/Menu";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Appointment from "./components/pages/appointment/Appointments";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditGallery from "./components/pages/forAdmin/EditGallery";
import Footer from "./components/shared/footer/Footer";
import LoginAdmin from "./components/pages/forAdmin/loginAdmin/LoginAdmin";
import React, {useEffect, useState} from "react";
import {UserContext} from "./components/context/UserContext";
import "firebase/compat/firestore";
import {firebaseService} from "./FirebaseService";
import {AuthorContext, AuthorContextProvider, useAuthorContext} from "./components/context/AuthorContext";

function App() {

    const { getAuthor, author, setAuthor } = useAuthorContext();

    const [user, setUser] = useState({
        email: "",
        name: "",
        pass: "",
        auth: null,
    });


    const routes = [
        { path: "/", element: <Home/> },
        { path: "/gallery", element: <Gallery/> },
        { path: "/about", element: <About/> },
        { path: "/contact", element: <Contact/> },
        { path: "/appointment", element: <Appointment/> },
        { path: "/loginadm", element: <LoginAdmin/> },
        { path: "/editgallery", element: <EditGallery/> }
    ];


  return (
      <UserContext.Provider value={{user, setUser}}>
          <AuthorContextProvider>
      <BrowserRouter>
          <div className="app">
              <header className="app-header">
                  <Menu />
              </header>
              <Routes>
                  { routes.map((item, index) =>
                      <Route key={index} path={item.path} element={item.element} /> )
                  }
              </Routes>
              <footer className="app-footer">
                  <br />
                  <Footer />
              </footer>
          </div>
      </BrowserRouter>
          </AuthorContextProvider>
      </UserContext.Provider>
  );
}

export default App;

