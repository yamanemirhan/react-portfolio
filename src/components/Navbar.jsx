import React from "react";
import { HiOutlineMoon, HiOutlineSun, HiOutlineXCircle } from "react-icons/hi";

function Navbar({ theme, handleThemeSwitch }) {
  return (
    <div className="sm:px-10 px-1 py-24">
      <nav className="flex items-center justify-between">
        <div href="/" className="sm:text-3xl text-xl">
          <h1>Emirhan.</h1>
        </div>
        {theme === "dark" ? (
          <HiOutlineSun
            onClick={handleThemeSwitch}
            size={40}
            color="yellow"
            className="cursor-pointer"
          />
        ) : (
          <HiOutlineMoon
            onClick={handleThemeSwitch}
            size={40}
            color="black"
            className="cursor-pointer"
          />
        )}
        <ul className="flex items-center sm:gap-8 gap-2">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
