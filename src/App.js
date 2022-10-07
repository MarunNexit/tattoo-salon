import './App.css';
import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <section className="app">
          <header className="app-header">
                  <Menu/>
                  <Routes>
                      <Route exact path="/" element={<Home/> } />
                      <Route path="/portfolio" element={<Portfolio/>} />
                      <Route path="/about" element={<About/>} />
                  </Routes>
          </header>
              <h1>hello!</h1>
      </section>
      </BrowserRouter>
  );
}

export default App;
