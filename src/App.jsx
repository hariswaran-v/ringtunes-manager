import React from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import PopularRingtones from "./components/PopularRingtones";
import Footer from "./components/Footer";

const RingTunesApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Banner />
      <Categories />
      <PopularRingtones />
    </div>
  );
};

export default RingTunesApp;
