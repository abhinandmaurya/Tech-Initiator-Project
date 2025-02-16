import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Price from "./Components/Price/Price";
import Badges from "./Components/Badges/Badges";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";
import Leaderboard from "./Components/Leaderboards/Leaderboards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Price />
      <Badges />
      <Sponsors />
      <Leaderboard />
      <Footer />
    </>
  );
};

export default App;
