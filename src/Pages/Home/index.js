import React from "react";
import "./home.scss";
import HeaderArea from "./components/headerArea";
import SearchArea from "./components/searchArea";

const Home = () => {
  return (
    <div className="main">
      <div className="flex flex-col w-2/3">
        <HeaderArea />
        <SearchArea />
      </div>
    </div>
  );
};

export default Home;
