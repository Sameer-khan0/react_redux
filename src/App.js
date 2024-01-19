import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodos from "./components/AddTodos.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import AboutDev from "./components/AboutDev.jsx";
import Nopage from "./components/Nopage.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div id="maincom">
      <Router>
        <Nav />
          <div className="homecon">
            <h1 className="header">ToDo App</h1>
            <div className="showcon">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addtodo" element={<AddTodos />} />
              <Route path="/about" element={<About />} />
              <Route path="/aboutdev" element={<AboutDev />} />
              <Route path="*" element={<Nopage />} />
        </Routes>
            </div>
          </div>
      </Router>
    </div>
  );
}

export default App;
