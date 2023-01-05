import React from "react";
import { Rate } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { BiTimeFive, BiCategory } from "react-icons/bi";

const Card = ({ data }) => {
  return (
    <div className="  w-full h-full  flex  hover:scale-105 duration-300 ">
      <div className="border shadow-md bg-neutral-50 w-80 rounded-md text-sm">
        <a target="_blank" href={data.CourseLink}>
          <div className="relative">
            <span className="bg-red-200 absolute rounded-tl-md">
              <img
                className="w-12 h-8 rounded-tl-md"
                src={
                  data.Language === "English"
                    ? "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
                    : "https://upload.wikimedia.org/wikipedia/commons/b/bb/Turkey_flag_300.png"
                }
                alt="flag"
              />
            </span>
            <img
              className="w-80 rounded-t-md group"
              src={data.CourseImage}
              alt={data.Title}
            />
          </div>

          <div className="mt-2 font-semibold text-gray-700 hover:text-opacity-50 duration-500 drop-shadow-md px-2">
            <span>{data.Title}</span>
          </div>
        </a>
        <div className="ml-2 flex items-center">
          <Rate
            className=" text-xs"
            allowHalf
            disabled
            defaultValue={data.Rating}
          />
          <span className="text-xs ml-1 font-medium hover:text-indigo-300 duration-300 text-blue-400 underline">
            <a target="_blank" href={data.RatingLink}>
              {" "}
              {data.RatingCount}
            </a>
          </span>

          <span className="flex items-center text-xs font-medium text-green-600">
            {" "}
            <AiOutlineUser className="opacity-50 ml-2 text-base" />{" "}
            {data.Students}
          </span>
          <span className="flex items-center text-xs font-medium ml-2  ">
            <BiTimeFive className="text-gray-500 text-xs mr-1" />
            {data.Hours} Hr.
          </span>
        </div>
        <a href={data.AuthorLink}>
          <div className="mt-2 ml-2 text-xs underline hover:text-blue-500 duration-300 text-gray-500 font-normal">
            {data.Author}
          </div>
        </a>
        <div className="ml-2 font-normal text-sm mt-2">{data.Desc}</div>
        <div className="flex relative bottom-0 text-sm ml-2 mt-4 font-thin justify-between items-center">
          <div className="flex text-xs md:text-base items-center">
            <BiCategory className="mr-1" />
            {data.Category}
          </div>
          <a target="_blank" href={data.CourseLink}>
            <div className="pr-2  bg-red-500 p-0 md:p-1 rounded-br-md text-white font-semibold shadow-md ">
              {data.Price}₺
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
