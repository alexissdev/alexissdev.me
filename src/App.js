import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/Home";
import About from "./components/about/About";
import NotFound from "./components/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
