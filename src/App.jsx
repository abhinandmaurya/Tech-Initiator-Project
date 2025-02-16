import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Price from "./Components/Price/Price";
import Badges from "./Components/Badges/Badges";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Price />
      <Badges />
      <Sponsors />
      <Footer />
    </>
  );
};

export default App;
