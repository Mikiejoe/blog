import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Hero from "../components/Contact/Hero";
import { MdFacebook } from "react-icons/md";
import { BsTwitterX, BsYoutube } from "react-icons/bs";


function ContactPage() {
  useDocumentTitle("Laban's Desk - Contact Us");
  return (
    <div>
      <NavBar />
      <div className="">
        <Hero />
        <div className="md:px-32 px-8 py-8 space-y-8 space-x-12 gap-4 bg-gray-50">
          <div className="md:flex space-y-8 gap-4">
            <div className="flex-1">
              <h1 className="text-[28px] md:text-[32px]">You Can Find Us At</h1>
              <div className="space-y-4">
                <div>
                  <p className="text-secondaryText uppercase">Email</p>
                  <p className="text-primaryText/90">info@labansdesk.com</p>
                </div>
                <div>
                  <p className="text-secondaryText uppercase">Phone</p>
                  <p className="text-primaryText/90">+254740404040</p>
                </div>
                <div>
                  <p className="text-secondaryText uppercase">Location</p>
                  <p className="text-primaryText/90">1360 Kiratina,Nakuru</p>
                </div>
                <div className="flex gap-4">
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
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-[28px] md:text-[32px] ">Let's Get in Touch</h1>

              <form action="" className="p-4 md:w-[60%] space-y-4">
                <div className="h-9">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-50 w-full px-2 h-full border-b-[1px] outline-none border-secondaryText/60"
                    name=""
                    id=""
                  />
                </div>
                <div className="h-9">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-50 w-full px-2 h-full border-b-[1px] outline-none border-secondaryText/60"
                    name=""
                    id=""
                  />
                </div>
                <div className="h-9 mb-4">
                  <textarea
                    placeholder="Message"
                    className="bg-gray-50 w-full px-2  border-b-[1px] outline-none border-secondaryText/60"
                    name=""
                    id=""
                  />
                </div>
                <div className="h-9">
                  <button className="bg-secondary mt-4 px-4 py-2 rounded-md float-right">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
