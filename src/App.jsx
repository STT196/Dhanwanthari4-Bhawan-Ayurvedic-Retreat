import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heropage/Hero';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Package from './components/Package/Package';
import Welledu from './components/welledu/Welledu';
import Contact from './components/Contact/Contact';
import Procedure from './components/Procedure/Procedure';
import WelToure from './components/welnesstoure/WelToure';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Hero id="hero-section" />

            <About />
            <Gallery />
            <Package id="package-section" />
            <Welledu />
            <WelToure id="wel-toure-section" /> {/* Add id to WelToure for scrolling */}
            <Contact />
          </div>
        } />
        <Route path="/procedure" element={
          <div>
            <Procedure />
            <Contact />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
