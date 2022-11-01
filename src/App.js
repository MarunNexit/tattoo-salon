import './App.css';
import Menu from "./components/menu/Menu";
import Home from "./components/pages/home/Home";
import Portfolio from "./components/pages/portfolio/Portfolio";
import About from "./components/pages/about/About";
import Appointment from "./components/pages/appointment/Appointments";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    const routes = [
        { path: "/", element: <Home/> },
        { path: "/portfolio", element: <Portfolio/> },
        { path: "/about", element: <About/> },
        { path: "/appointment", element: <Appointment/> }
    ];

  return (
      <BrowserRouter>
          <div className="app">
              <header className="app-header">
                  <Menu />
              </header>
              <Routes>
                  { routes.map((item, index) =>
                      <Route key={index} path={item.path} element={item.element} />) }
              </Routes>
              <h1>hello!</h1>
              <footer className="app-footer">
                  <h1>hello!</h1>
              </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
