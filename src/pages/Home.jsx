import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import PopularRingtones from "../components/PopularRingtones";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <PopularRingtones />
    </div>
  );
};

export default Home;
