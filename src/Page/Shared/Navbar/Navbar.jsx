import { useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import Navlink from "./Navlink";
import Logo from "../../../Logo/Logo";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

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
      <div className="flex justify-between px-5  items-center shadow py-2 text-black rounded-2xl ">
        <div className="flex items-center  ">
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
           <div className="hidden md:block">
             <Logo></Logo>
           </div>
          </Link>
         
        </div>
        <div>
          <ul className="md:flex gap-6 font-semibold hidden">{link}</ul>
        </div>
        <div className="flex items-center gap-2.5 md:gap-7 ">
          <Link to='/login'
            className="p-2 md:p-3 md:px-5 border border-gray-700 rounded-md 
    transition hover:bg-gray-800 hover:text-white"
          >
            Sign In
          </Link>

          <Link to='/register'
            className="p-2 bg-primary md:px-5 md:p-3 rounded-md text-[#1F1F1F] 
    transition  hover:shadow-lg"
          >
            Sign Up
          </Link>
            <BsArrowUpRightCircleFill className="relative right-7" size={40} />
         
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
