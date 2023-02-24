import React from "react";
import "./App.css";
import Data from "./components/data/Data";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Locations from "./components/locations/Locations";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Locations />
      <Footer />
    </>
  );
}

export default App;
