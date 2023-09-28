import React from "react";
import { getImageUrl } from "../utils";

function About() {
  return (
    <div
      id="about"
      className="p-6 border bg-slate-200 dark:bg-slate-700 rounded-md"
    >
      <h2 className="text-3xl mb-4">About</h2>
      <p>
        Hello! I'm Emirhan, a budding full-stack web developer, always excited
        about diving into new projects in the digital realm. My passion for
        technology and coding drives me to continually improve myself and
        acquire new skills. I thrive on a creative and collaborative approach,
        and I make it a point to maximize this approach in my projects. With
        experience in both front-end and back-end development, I focus on
        enhancing the user experience by effectively utilizing my skills.
      </p>
      <div className="flex items-center flex-col sm:flex-row gap-6 mt-6 sm:mt-0">
        <span className="text-xl">Tech Stack</span>
        <ul className="flex items-center gap-4">
          <li className="border p-2 w-fit bg-black rounded-full">
            <img
              src={getImageUrl("skills/html.png")}
              alt="html"
              className="w-14 p-1"
            />
          </li>
          <li className="border p-2 w-fit bg-black rounded-full">
            <img
              src={getImageUrl("skills/css.png")}
              alt="css"
              className="w-14 p-1"
            />
          </li>
          <li className="border p-2 w-fit bg-black rounded-full">
            <img
              src={getImageUrl("skills/react.png")}
              alt="react"
              className="w-14 p-1"
            />
          </li>
          <li className="border p-2 w-fit bg-black rounded-full">
            <img
              src={getImageUrl("skills/node.png")}
              alt="node"
              className="w-14 p-1"
            />
          </li>
          <li className="border p-2 w-fit bg-black rounded-full">
            <img
              src={getImageUrl("skills/mongodb.png")}
              alt="mongodb"
              className="w-14 p-1"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
