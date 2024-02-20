import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColorSelection from './pages/ColorSelection';
import Page2 from './pages/Page2';

function App() {
  return (
    <Router>
    <Routes>

        <Route path="/" element={<ColorSelection />} />
        <Route path="/page2" element={<Page2/>} />

    </Routes>
    </Router>
  );
}

export default App;
