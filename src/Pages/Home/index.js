import React from "react";
import "./home.scss";
import HeaderArea from "./components/headerArea";
import SearchArea from "./components/searchArea";

const Home = () => {
  return (
    <div className="main">
      <div className="flex flex-col pb-4 md:w-auto">
        <HeaderArea />
        <SearchArea />
        <div className="flex justify-center text-xs mt-2">
          <span>Onur Uçar - 20211132069</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
