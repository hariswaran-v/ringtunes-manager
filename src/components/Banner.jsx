import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const Banner = () => {
  return (
    <header className="px-10 py-5 sm:px-20 bg-gray-900 text-white bg-[url('/img/img-3.jpg')] bg-center bg-cover">
      {/* Top Nav Row */}
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-bold">Ringtunes</h4>
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={32} />
        </a>
      </div>

      {/* Banner Content */}
      <div className="text-center my-14 space-y-4">
        <h3 className="text-2xl font-bold">
          Download <span className="text-red-500">Ringtunes</span> <br />
          <span className="text-lg">in Seconds...</span>
        </h3>

        {/* Search Input */}
        <div className="relative max-w-sm mx-auto">
          <MdSearch
            size={24}
            className="text-gray-400 absolute top-2 left-2 p-0.5"
          />
          <input
            type="text"
            placeholder="Search by artist, movie names, etc."
            className="pl-10 pr-4 py-2 rounded outline-none w-full text-gray-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
