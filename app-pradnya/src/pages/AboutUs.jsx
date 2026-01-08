import React from "react";
import { Link, Outlet } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>This is About Us page</p>
      <hr />
      <Link to="/about/company" >Company Info.</Link>
      <Link to="/about/career" >Career</Link>
      <Link to="/about/services" >Services</Link>
      <Outlet />
    </>
  );
};

export default AboutUs;
