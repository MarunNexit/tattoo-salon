import './App.css';
import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {path: "/", element: <Home/> },
        {path: "/portfolio", element: <Portfolio/>},
        {path: "/about", element: <About/>}
    ]);


  return (
          <div className="app">
              <header className="app-header">
                  <Menu />
              </header>

              <RouterProvider router={router} />;
              <h1>hello!</h1>

              <footer><h1>hello!</h1></footer>
          </div>
  );
}

export default App;
