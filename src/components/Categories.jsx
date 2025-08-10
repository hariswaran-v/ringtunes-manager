import React from "react";

const Categories = () => {
  const categories = [1, 2, 3, 4];
  const languages = [1, 2, 3, 4];

  return (
    <div className="bg-white mx-5 my-5 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
      {/* Filter Section */}
      <aside className="bg-gray-300 p-5 rounded shadow space-y-4 max-w-sm hidden sm:block">
        <h4 className="font-semibold text-lg">Filter</h4>

        <div className="space-y-4">
          <select
            name="languages"
            id="languages"
            className="p-2 rounded w-full text-sm outline-none"
          >
            <option value="">Select Languages</option>
            <option value="tamil">Tamil</option>
            <option value="malayalam">Malayalam</option>
            <option value="kannada">Kannada</option>
            <option value="english">English</option>
          </select>

          <select
            name="artist"
            id="artist"
            className="p-2 rounded w-full text-sm outline-none"
          >
            <option value="">Select Artist</option>
            <option value="anirudh-ravichandran">Anirudh Ravichandran</option>
            <option value="harris-jeyaraj">Harris Jeyaraj</option>
            <option value="vijay-antony">Vijay Antony</option>
            <option value="yuvan">Yuvan Shankar Raja</option>
            <option value="ar-rahman">AR Rahman</option>
          </select>

          <input
            type="text"
            placeholder="Movie Title"
            className="p-2 rounded w-full text-sm outline-none"
          />

          <button className="bg-rose-500 px-4 py-2 rounded text-white w-full font-semibold mt-5">
            Search
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="space-y-6 flex-1">
        {/* Categories */}
        <section>
          <h4 className="font-semibold">Categories</h4>
          <div className="flex space-x-6 mt-3">
            {categories.map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 sm:w-36 sm:h-36 rounded bg-gray-500"
              ></div>
            ))}
          </div>
        </section>

        {/* Browse by Languages */}
        <section>
          <h4 className="font-semibold">Browse by Languages</h4>
          <div className="flex space-x-6 mt-3">
            {languages.map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 sm:w-36 sm:h-36 rounded bg-gray-500"
              ></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
