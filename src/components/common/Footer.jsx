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
  return (
    <div className="bg-primaryText/80 ">
      <div className="p-4 text-center">
        <h1 className="text-center text-[28px] font-semi-bold text-primary">
          Blog Name
        </h1>
        <p className="text-primary/70">
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
        <p className="text-center bg-primaryText p-2 text-primary">
          &copy;2024 BlogName
        </p>
        <div className="flex justify-between p-4">
          <div className="text-primary/50 ">
            {Links.map((link, index) => (
              <Link
                key={index}
                className="px-1 py-1 hover:border-primary transition-colors flex"
                to={link.route}
              >
                <p className="text-links">{link.name}</p>
              </Link>
            ))}
          </div>
          {/* <div>
          <div className="flex rounded-md overflow-hidden">
          <input type="text" />
          <button className="bg-[#CD201F] p-2">Send</button>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
