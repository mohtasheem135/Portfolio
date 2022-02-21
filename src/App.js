import React from 'react';
import { Route, Routes } from "react-router";
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
