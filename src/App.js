import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/services" element={<Services />} exact></Route>
          <Route path="/projects" element={<Projects />} exact></Route>
          <Route path="/contact" element={<Contact />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
