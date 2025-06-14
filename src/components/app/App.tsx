import React, {ReactElement} from 'react';
import './App.scss';
import FreePlay from "../pages/free-play/FreePlay";
import Home from "../pages/home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import TheoryEngine from "../pages/theory-engine/TheoryEngine";
import SheetMusic from "../pages/sheet-music/SheetMusic";

function App(): ReactElement {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/free-play" element={<FreePlay/>}/>
                    <Route path="/theory-engine" element={<TheoryEngine/>}/>
                    <Route path="/sheet-music" element={<SheetMusic/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
