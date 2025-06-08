import React, {ReactElement} from 'react';
import './App.css';
import FreePlay from "../pages/free-play/FreePlay";
import Home from "../pages/home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App(): ReactElement {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/free-play" element={<FreePlay/>}/>
          </Routes>
      </Router>
  );
}

export default App;
