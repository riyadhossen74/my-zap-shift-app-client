import { useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import Navlink from "./Navlink";
import Logo from "../../../Logo/Logo";

const navData = [
  {
    id: 1,
    name: "Services",
    path: "/",
  },
  {
    id: 2,
    name: "Coverage",
    path: "/coverage",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const link = navData.map((data) => (
    <Navlink data={data} key={data.id}></Navlink>
  ));
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between px-5 md:px-30 items-center shadow py-2">
        <div className="flex items-center text-black  text-3xl font-extrabold    ">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <TbXboxX className="text-black md:hidden" />
            ) : (
              <CiMenuBurger className="text-black md:hidden" />
            )}
          </span>
          <ul
            className={`'md:hidden absolute duration-1000 bg-amber-400 p-5 text-black ${
              open ? "top-10" : "-top-200"
            }`}
          >
            {link}
          </ul>
          <Link to="/">
            <Logo></Logo>
          </Link>
          <h1>ZapShift</h1>
        </div>
        <div>
          <ul className="md:flex gap-6 font-semibold hidden">{link}</ul>
        </div>
        <div className="flex items-center gap-7">
          <button
            className="p-3 px-5 border border-gray-700 rounded-md 
    transition hover:bg-gray-800 hover:text-white"
          >
            Sign In
          </button>

          <button
            className="bg-[#CAEB66] px-5 p-3 rounded-md text-[#1F1F1F] 
    transition hover:bg-[#b8db5c] hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
