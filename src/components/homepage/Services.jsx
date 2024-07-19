import React from "react";
import { Link } from "react-router-dom";

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

function Services() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="uppercase text-primaryText/70 text-lg font-bold">
          What we do
        </h1>
        <div className="md:grid grid-cols-3 gap-4 space-y-4 md:space-y-0">
          {services.map((service, index) => (
            <div key={index} className="bg-primaryText/5 rounded-md overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-[100%]"
              />
              <div className="p-4">
                <h1 className="uppercase text-primaryText/70 text-md font-bold">
                  {service.name}
                </h1>
                <p className="text-primaryText/60">{service.descrition}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="what-we-do">
          <button className="bg-primary border-primaryText border rounded-md py-2 px-7 mt-4 text-primaryText/50">
            More
          </button>
        </Link>
      </div>
    </>
  );
}

export default Services;
