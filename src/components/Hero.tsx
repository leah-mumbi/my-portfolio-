import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import profile from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section id="home"
      className="flex flex-col md:flex-row items-center justify-between py-20 px-8 md:px-20 bg-white"
    >
             <div className="flex flex-col max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I’m <span className="text-blue-600">Leah</span> 👋
        </h1>

        <p className="text-gray-600 leading-relaxed">
          I’m a front-end web developer with a focus on creating clean, visually
          appealing, and responsive web applications. I love turning ideas into
          beautiful digital experiences.
        </p>
        <div className="flex items-center gap-2 text-gray-700">
          <MdLocationOn className="text-blue-600 text-xl" />
          <span>Nairobi, Kenya</span>
        </div>

        <p className="text-green-600 font-medium">
          🟢 Available for new projects
        </p>
         <div className="flex gap-4 text-gray-700 text-2xl mt-4">
          <a
            href="https://github.com/leah-mumbi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/leah-mumbi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/*Profile Image*/}
      <div className="mt-10 md:mt-0 md:ml-10">
       <img
  src={profile}
  alt="Profile"
  className="w-64 h-64 md:w-90 md:h-100 object-cover rounded-lg shadow-lg"
/>
        </div>
        </section>
    )
}