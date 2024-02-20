import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColorSelection from './pages/ColorSelection';
import Page2 from './pages/Page2';
import { RecoilRoot } from "recoil";
const socketIO = require("socket.io");



function App() {
  return (
    <RecoilRoot>
    <Router>
    <Routes>

        <Route path="/" element={<ColorSelection />} />
        <Route path="/page2" element={<Page2/>} />

    </Routes>
    </Router>
    </RecoilRoot>


  );
}

export default App;
