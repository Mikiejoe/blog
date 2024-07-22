import React from "react";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

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

function Footer() {
  const year = () => {
    return new Date().getFullYear();
  }
  return (
    <div className="bg-primary/30 ">
      <div className="p-4 flex flex-col items-center text-center">
        <img src="/logo.png" className="h-12" alt="" />
        <p className="text-primaryText/70  md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia
          eveniet reprehenderit laborum quisquam, amet odit voluptas atque ipsa
          molestiae, voluptatum eaque iure provident veritatis, cupiditate in
          earum placeat officiis?
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Link className="p-1 border rounded-full" to="#">
          <MdFacebook color="#316FF6" size={24} />
        </Link>
        <Link className="p-2 border rounded-full" to="#">
          <BsTwitterX />
        </Link>
        <Link className="p-2 border rounded-full" to="#">
          <BsYoutube color="#CD201F" />
        </Link>
      </div>

      <div className="flex flex-col-reverse">
        <p className="text-center bg-secondary p-2 text-primaryText">
          &copy;{year()} Laban's Desk
        </p>
        <div className="flex md:justify-center p-4">
          <div className="text-primaryText/50 md:flex gap-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                className="px-1 py-1 hover:border-primary transition-colors flex"
                to={link.route}
              >
                <p className="text-primaryText/80">{link.name}</p>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
