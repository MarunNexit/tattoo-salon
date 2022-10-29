import './App.css';
import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    const routes = [
        { path: "/", element: <Home/> },
        { path: "/portfolio", element: <Portfolio/> },
        { path: "/about", element: <About/> }
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

              <footer><h1>hello!</h1></footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
