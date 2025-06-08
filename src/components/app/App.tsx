import React, {ReactElement} from 'react';
import './App.css';
import FreePlay from "../pages/free-play/FreePlay";
import Home from "../pages/home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
const menuClassName: string = "menu-item";

function App(): ReactElement {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home className={menuClassName}/>} />
              <Route path="/free-play" element={<FreePlay/>} />
          </Routes>
      </Router>
  );
}

export default App;
