import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat ex obcaecati tenetur dolorum quasi rem! Vero consequuntur
          perferendis architecto.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          beatae.adipisicing elit. Enim, beatae.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
