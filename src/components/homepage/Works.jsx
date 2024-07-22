import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const services = [
  {
    name: "service1",
    descrition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quia quas suscipit facere ratione illo, earum natus doloremque dolores reiciendis veniam tempore, facilis cumque quam vel dolorem obcaecati alias.",
    image: "https://placehold.co/400x500",
  },
  {
    name: "service2",
    descrition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quia quas suscipit facere ratione illo, earum natus doloremque dolores reiciendis veniam tempore, facilis cumque quam vel dolorem obcaecati alias.",
    image: "https://placehold.co/400x500",
  },
  {
    name: "service3",
    descrition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quia quas suscipit facere ratione illo, earum natus doloremque dolores reiciendis veniam tempore, facilis cumque quam vel dolorem obcaecati alias.",
    image: "https://placehold.co/400x500",
  },
  {
    name: "service4",
    descrition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quia quas suscipit facere ratione illo, earum natus doloremque dolores reiciendis veniam tempore, facilis cumque quam vel dolorem obcaecati alias.",
    image: "https://placehold.co/400x500",
  },
];

function Works() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="uppercase text-primaryTextText/70 text-lg font-bold">
          What We Have Done
        </h1>
        <div className="md:grid grid-cols-3 gap-4 space-y-4 md:space-y-0">
          {services.map((service, index) => (
            <div key={index} className="bg-primaryText/5 rounded-md overflow-hidden">
              <LazyLoadImage
            className="w-[100%] "
            alt="altanate"
            effect="blur"
            height="240px"
            placeholder={<div className='h-[240px] bg-gray-400'></div>}
            wrapperProps={{
              
              style: { transitionDelay: "1s" },
            }}
            src={service.image}
            lt={service.name}
          />
              
              <div className="p-4">
                <h1 className="uppercase text-primaryText text-md font-bold">
                  {service.name}
                </h1>
                <p className="text-secondaryText">{service.descrition}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="what-we-do">
          <button className="bg-secondary  border rounded-md py-2 px-7 mt-4 text-primaryTextText/50">
            More
          </button>
        </Link>
      </div>
    </>
  );
}

export default Works;
