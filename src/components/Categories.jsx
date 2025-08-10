import React, { useState } from "react";
import { Filter } from "lucide-react";

const Categories = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const categories = [
    { id: 1, name: "Bollywood", color: "from-red-400 to-pink-400", icon: "🎬" },
    {
      id: 2,
      name: "Hollywood",
      color: "from-blue-400 to-indigo-400",
      icon: "🎭",
    },
    {
      id: 3,
      name: "Classical",
      color: "from-green-400 to-teal-400",
      icon: "🎼",
    },
    {
      id: 4,
      name: "Electronic",
      color: "from-purple-400 to-pink-400",
      icon: "🎧",
    },
  ];

  const languages = [
    { id: 1, name: "Tamil", color: "from-orange-400 to-red-400", flag: "🇮🇳" },
    {
      id: 2,
      name: "Malayalam",
      color: "from-green-400 to-emerald-400",
      flag: "🇮🇳",
    },
    { id: 3, name: "English", color: "from-blue-400 to-cyan-400", flag: "🇺🇸" },
    {
      id: 4,
      name: "Hindi",
      color: "from-yellow-400 to-orange-400",
      flag: "🇮🇳",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 mx-6 my-8 rounded-3xl p-8 shadow-lg">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Filter Sidebar */}
        <aside className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full lg:w-80">
          <h4 className="font-bold text-xl text-gray-800 mb-6 flex items-center">
            <Filter className="w-5 h-5 mr-2 text-purple-600" />
            Filter Options
          </h4>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Languages
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all"
              >
                <option value="">Select Languages</option>
                <option value="tamil">Tamil</option>
                <option value="malayalam">Malayalam</option>
                <option value="kannada">Kannada</option>
                <option value="english">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Artist
              </label>
              <select
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all"
              >
                <option value="">Select Artist</option>
                <option value="anirudh-ravichandran">
                  Anirudh Ravichandran
                </option>
                <option value="harris-jeyaraj">Harris Jeyaraj</option>
                <option value="vijay-antony">Vijay Antony</option>
                <option value="yuvan">Yuvan Shankar Raja</option>
                <option value="ar-rahman">AR Rahman</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Movie Title
              </label>
              <input
                type="text"
                placeholder="Enter movie name"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Search Now
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Categories Section */}
          <section>
            <h4 className="font-bold text-2xl text-gray-800 mb-6">
              Popular Categories
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h5 className="font-bold text-lg">{category.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h4 className="font-bold text-2xl text-gray-800 mb-6">
              Browse by Languages
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map((language) => (
                <div
                  key={language.id}
                  className={`bg-gradient-to-br ${language.color} p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{language.flag}</div>
                    <h5 className="font-bold text-lg">{language.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Categories;
