import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/Pages/AboutUs";
import Products from "./Components/Pages/Products";
import Faq from "./Components/Pages/Faq";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
