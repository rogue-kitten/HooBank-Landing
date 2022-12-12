import React, { useState } from "react";
import { navLinks } from "../constants/index";
import { close, logo, menu } from "../assets";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10">
        {navLinks.map((navlink) => (
          <li
            key={navlink.id}
            className={
              "font-poppins font-normal cursor-pointer text-base text-white"
            }
          >
            <a href="#${navlink.id}">{navlink.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          onClick={() => setisOpen((prev) => !prev)}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col  justify-end items-center flex-1 space-y-4">
            {navLinks.map((navlink) => (
              <li
                key={navlink.id}
                className={
                  "font-poppins font-normal cursor-pointer text-base text-white"
                }
              >
                <a href="#${navlink.id}">{navlink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
