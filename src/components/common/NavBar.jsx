import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMenuAlt1, HiMenuAlt2, HiMenuAlt3, HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Links = [
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/what-we-do",
    name: "What We Do",
  },
  {
    route: "/what-we-have-done",
    name: "What We Have Done",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openNavBar = () => {
    setIsOpen(!isOpen);
    console.log("navbar open", isOpen);
  };
  const CurrentRoute = (current) => {
    const location = useLocation();
    console.log(current === location.pathname);
    return current === location.pathname;
  };
  // console.log(CurrentRoute());
  return (
    <>
      <div className="bg-primaryText flex p-4 md:px-16 justify-between items-center text-primary">
        <Link to="/">Title</Link>
        <ul className="gap-4 hidden md:flex">
          {Links.map((link, index) => (
            <Link
              key={index}
              className={` border-b-[2px] border-primaryText px-1 py-1 hover:border-primary transition-colors ${
                CurrentRoute(link.route) ? "border-primary" : ""
              }`}
              to={link.route}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        <div className="md:hidden">
          {isOpen ? (
            <HiMenuAlt2 onClick={openNavBar} />
          ) : (
            <HiMenuAlt3 onClick={openNavBar} />
          )}
        </div>
      </div>
      <div
        className={`bg-primaryText  text-primary absolute ${
          isOpen ? "left-[0]" : "left-[-100%]"
        } w-[100%] transition-all  items-center fle justify-center`}
      >
        <div className="space-y-4 p-4">
          {Links.map((link, index) => (
            <Link
              onClick={openNavBar}
              key={index}
              className={`border-b-[2px] border-primaryText px-1 py-1 ${
                CurrentRoute(link.route) ? "text-primary" : ""
              } hover:bg-gray-700 rounded-md w-[40%] transition-colors flex`}
              to={link.route}
            >
              <li
                className={`list-none text-links ${
                  CurrentRoute(link.route) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
