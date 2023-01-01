import React from 'react';
import NavBar from "../components/navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Plans from "./plans";
import '../App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> 
  );
}

export default App;
