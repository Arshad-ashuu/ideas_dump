"use client";
import React from "react";
import BrainSvg from "./BrainSvg"
const Cards = ({ data }) => {
  return (
    <>
      <div className="max-w-2xl px-4 py-6  shadow-sm shadow-pink-400  border border-gray-500 rounded-xl ">
        <div className="flex items-center justify-between">
          <span className="text-sm ">
            {``}
          </span>
          <h6
            className="px-3  text-sm font-bold dark:text-green-500 cursor-pointer "

          >
            {data.tag}
          </h6>
        </div>
        <div className="mt-2">
          <h3
            className="text-xl font-semibold text-gray-700 dark:text-white dark:hover:text-gray-200 "

          >
            {data.idea}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 flex justofy-center items-center gap-2">
            {
              data.creator.username == "mohammad arshad" ? (
                <>
                  {data.creator.username}
                  <BrainSvg />
                </>
              ) :
                <>
                  {data.creator.username}
                </>
            }

          </p>
        </div>
      </div>
    </>
  );
};
export default Cards;


