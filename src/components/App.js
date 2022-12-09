import '../App.css';
import Menu from "./shared/menu/Menu";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Appointment from "./pages/appointment/Appointments";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditGallery from "./pages/forAdmin/EditGallery";
import Footer from "./shared/footer/Footer";
import LoginAdmin from "./form/loginAdmin/LoginAdmin";
import React, {useState} from "react";
import {UserContext} from "./context/UserContext";
import "firebase/compat/firestore";
import {AuthorContextProvider, useAuthorContext} from "./context/AuthorContext";

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

