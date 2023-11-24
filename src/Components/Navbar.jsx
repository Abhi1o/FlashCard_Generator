// Importing React library and NavLink component from react-router-dom
import React from "react";
import { NavLink } from "react-router-dom";

// Functional component for the Navbar
const Navbar = () => {
  return (
    // Container for the Navbar with width, padding, and spacing
    <div className="w-full pt-6 px-9 lg:px-40 2xl:px-64 pb-3">
      {/* Heading for the Navbar */}
      <h1 className="text-2xl text-black font-semibold mb-4 2xl:text-3xl 2xl:font-bold 2xl:pt-7 pt-4 pb-2 2xl:pb-3">
        Create Flashcard
      </h1>
      {/* Flex container for buttons with font styles, spacing, and padding */}
      <div className="flex font-medium 2xl:text-xl 2xl:font-bold space-x-12 pb-3 px-2">
        {/* Button with NavLink to the home page */}
        <button className=" ">
          <NavLink
            to={"/"} 
            // Styling for the active link with a red bottom border and text color
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red " : undefined,
              paddingBottom: "12px",
              color: isActive ? "red" : "GrayText",
            })}
          >
            Create New
          </NavLink>
        </button>
        {/* Button with NavLink to the My Flashcard page */}
        <button className="">
          <NavLink
            to={"/myflashcard "}
            // Styling for the active link with a red bottom border and text color
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              color: isActive ? "red" : "GrayText",
            })}
          >
            My Flashcard
          </NavLink>
        </button>
      </div>
      {/* Horizontal line for visual separation */}
      <hr className="border border-gray-300 md:mb-5 mb-8" />
    </div>
  );
};

// Exporting the Navbar component
export default Navbar;
