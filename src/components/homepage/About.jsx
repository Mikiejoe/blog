import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="uppercase text-primaryText/70 text-lg font-bold">
          About Us
        </h1>
        <div className="md:flex space-y-2 items-center gap-52">
          <p className="text-primaryText/60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            perspiciatis dolorum molestiae aperiam temporibus ut corrupti
            doloremque beatae. Quae, impedit. At commodi distinctio temporibus
            fuga natus ipsum labore id maiores odio voluptatum, harum quam
            inventore minima amet cum! Quasi fuga delectus ducimus, eaque nihil
            aliquam tempora nisi repudiandae nemo earum facere quae praesentium
            laboriosam, ullam laudantium repellat ipsum ipsa voluptatum.
          </p>
          <LazyLoadImage
            className="bg-gray-400 h-[250px] w-[2600px]  hidden md:block "
            alt="altanate"
            effect="blur"
            height="240px"
            placeholder={<div className='h-[240px] bg-gray-400'></div>}
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
            src="https://media.istockphoto.com/id/472324721/vector/rally-demonstration.jpg?s=1024x1024&w=is&k=20&c=ZEhCQQSiV_v5WvWJsTztpXmwxPAWud4CJCtpETdxq70="
          />
        </div>
        <Link to="/about">
          <button className="bg-primary border-primaryText border rounded-md text-primaryText/50 p-2 mt-4">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
}

export default About;
