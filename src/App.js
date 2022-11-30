import './App.css';
import Menu from "./components/menu/Menu";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Appointment from "./components/pages/appointment/Appointments";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddGallery from "./components/pages/forAdmin/AddGallery";
import EditGallery from "./components/pages/forAdmin/EditGallery";
import Footer from "./components/footer/Footer";
import LoginAdmin from "./components/pages/forAdmin/loginAdmin/LoginAdmin";
import React, {useState} from "react";
import {UserContext} from "./components/context/UserContext";
import TopPages from "./components/topPages/TopPages";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {firebaseService} from "./FirebaseService";



function App() {

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
        { path: "/addportf", element: <AddGallery/> },
        { path: "/loginadm", element: <LoginAdmin/> },
        { path: "/editgallery", element: <EditGallery/> }
    ];

  return (
      <UserContext.Provider value={{user, setUser}}>
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
      </UserContext.Provider>
  );
}

export default App;
