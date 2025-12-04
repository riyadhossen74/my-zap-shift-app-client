import { useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import Navlink from "./Navlink";
import Logo from "../../../Logo/Logo";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import useAuth from "../../../hook/useAuth";

const navData = [
  {
    id: 1,
    name: "Services",
    path: "/",
  },

  {
    id: 2,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 3,
    name: "Be a Rider",
    path: "/rider",
  },
  {
    id: 4,
    name: "Coverage Areas",
    path: "/coverage",
  },
  {
    id: 5,
    name: "About Us",
    path: "/about-us",
  },
  // {
  //   id:6,
  //   name: 'Parcel Track',
  //   path: '/parcel-track/:parcelId'
  // }
];

const Navbar = () => {
  const link = navData.map((data) => (
    <Navlink data={data} key={data.id}></Navlink>
  ));
  const [open, setOpen] = useState(false);
  const { user, LogOut } = useAuth();
  const handleLogOut = () => {
    LogOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            className={`'md:hidden absolute z-50 duration-1000 bg-amber-400 p-5 text-black ${
              open ? "top-10" : "-top-200"
            }`}
          >
            {link}
            {user && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-emerald-600 underline"
                      : "hover:text-emerald-500 hover:underline"
                  }
                  to="/dashboard/my-parcels"
                >
                  MY-Parcel
                </NavLink>
                <NavLink  className={({ isActive }) =>
                    isActive
                      ? "text-emerald-600 underline"
                      : "hover:text-emerald-500 hover:underline"
                  } to='/dashboard'>
                  Dashboard
                </NavLink>
              </>
            )}
          </ul>
          <Link to="/">
            <div className="hidden md:block">
              <div>
                <Logo />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <ul className="md:flex gap-6 font-semibold hidden">
            {link}
            {user && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-emerald-600 underline"
                      : "hover:text-emerald-500 hover:underline"
                  }
                  to="/dashboard/my-parcels"
                >
                  MY-Parcel
                </NavLink>
                <NavLink  className={({ isActive }) =>
                    isActive
                      ? "text-emerald-600 underline"
                      : "hover:text-emerald-500 hover:underline"
                  } to='/dashboard'>
                  Dashboard
                </NavLink>
              </>
            )}
          </ul>
        </div>
        {user ? (
          <div className="flex items-center gap-2.5 md:gap-7 ">
            <button
              onClick={handleLogOut}
              className="p-2 bg-primary md:px-5 md:p-3 rounded-md text-[#1F1F1F] 
     transition  hover:shadow-lg"
            >
              LogOut
            </button>
            <Link
              to="/rider"
              className="p-2 md:p-3 md:px-5 border border-gray-700 rounded-md 
    transition hover:bg-gray-800 hover:text-white"
            >
              Be a Rider
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 md:gap-7 ">
            <Link
              to="/login"
              className="p-2 md:p-3 md:px-5 border border-gray-700 rounded-md 
    transition hover:bg-gray-800 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="p-2 bg-primary md:px-5 md:p-3 rounded-md text-[#1F1F1F] 
    transition  hover:shadow-lg"
            >
              Sign Up
            </Link>
            <BsArrowUpRightCircleFill className="relative right-7" size={40} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
