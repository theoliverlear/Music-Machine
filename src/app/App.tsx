import React from 'react';
import './App.css';
import FreePlay from "../components/pages/free-play/FreePlay";
import Home from "../components/pages/home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
const menuClassName: string = "menu-item";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home className={menuClassName} />} />
              <Route path="/free-play" element={<FreePlay />} />
          </Routes>
      </Router>
  );
}

export default App;
