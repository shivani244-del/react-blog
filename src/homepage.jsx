import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import "./homepage.css";

import { Component } from "react";

const Homepage = () => {
  return (
    <div className="div1">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
