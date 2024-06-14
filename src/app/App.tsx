import React from 'react';
import './App.css';
import FreePlay from "../pages/FreePlay";
import Home from "../pages/Home";
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
