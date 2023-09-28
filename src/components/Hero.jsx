import React from "react";
import { getImageUrl } from "../utils";

function Hero() {
  const handleDownload = () => {
    const fileUrl = "cv.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="flex items-center flex-col-reverse md:flex-row p-4 mx-auto">
      <div className="flex-1 flex flex-col gap-6 p-10">
        <h2 className="text-5xl">Hi, I'm Emirhan</h2>
        <h4 className="text-2xl text-gray-700">Full-Stack Web Developer</h4>
        <button
          onClick={handleDownload}
          className="border rounded-xl py-2 px-6 w-fit hover:bg-orange-300 transition-all duration-500 cursor-pointer"
        >
          View CV
        </button>
        <ul className="flex items-center gap-4">
          <li className="border p-2 w-fit bg-black rounded-full cursor-pointer hover:bg-slate-400 transition-all duration-300">
            <a href="mailto:yaman.emrhn@gmail.com" target="_blank">
              <img src={getImageUrl("contact/email.png")} alt="email" />
            </a>
          </li>
          <li className="border p-2 w-fit bg-black rounded-full cursor-pointer hover:bg-slate-400 transition-all duration-300">
            <a href="https://github.com/yamanemirhan" target="_blank">
              <img src={getImageUrl("contact/github.png")} alt="github" />
            </a>
          </li>
          <li className="border p-2 w-fit bg-black rounded-full cursor-pointer hover:bg-slate-400 transition-all duration-300">
            <a
              href="https://www.linkedin.com/in/emirhan-yaman-5a79431b5/"
              target="_blank"
            >
              <img src={getImageUrl("contact/linkedin.png")} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <img
          src={getImageUrl("hero/me.png")}
          alt="me"
          className="rounded-full border border-black md:w-full w-[75%] mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
