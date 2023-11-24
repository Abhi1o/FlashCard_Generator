// Importing React library and NavLink component from react-router-dom
import React from "react";
import { NavLink } from "react-router-dom";
// Importing the logo image
import logo from "../Assets/logoF.png";

// Functional component for the header
const Header = () => {
  return (
    // Navigation section
    <nav>
      {/* Container for the header with padding, shadow, and white background */}
      <div className="p-2 xl:px-10 shadow-md bg-white">
        {/* NavLink to the home page */}
        <NavLink to={"/"}>
          {/* Logo image with responsive width */}
          <img className="w-20 2xl:w-40" src={logo} alt="logo" />
        </NavLink>
      </div>
    </nav>
  );
};

// Exporting the Header component
export default Header;

