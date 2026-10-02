import React from "react";
import Signin from "./signin";
import ContactSales from "./contactSales";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="nav">
        <p className="p1">Strip</p>
        <p>product</p>

        <p>servies</p>
        <p>Developer</p>
        <p>Resource</p>
        <p>Pricing</p>
        {/* <Signin />
        <ContactSales /> */}
      </div>
      <div className="cont">
        <Signin />
        <ContactSales />
      </div>
    </div>
  );
};

export default Navbar;
