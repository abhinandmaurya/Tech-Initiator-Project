import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Price from "./Components/Price/Price";
import Badges from "./Components/Badges/Badges";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Price />
      <Badges />
    </>
  );
};

export default App;
