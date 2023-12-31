/** @format */

import { TUser } from "@/types/user.type";
import React from "react";

interface PropsType {
  userInfo: TUser | undefined;
}

export default function UserInfo({ userInfo }: PropsType) {
  return (
    <div className="w-2/6 bg-white dark:bg-gray-800 dark:text-white rounded-xl pt-4 shadow-md my-5 mr-5">
      <div className="flex flex-col items-center p-5 border-b dark:text-white">
        <div className="w-[35%] pb-[35%] relative mb-5">
          <img
            src={userInfo?.image}
            alt="a"
            className="w-full h-full top-0 left-0 absolute object-cover rounded-full"
          />
        </div>
        <div className="text-2xl font-semibold">
          {userInfo?.firstname} {userInfo?.lastname}
        </div>
        <span className="text-md text-gray-500 dark:text-white  ">
          {userInfo?.email}
        </span>
        <button className="flex items-center bg-transparent hover:bg-blue-500 text-sm text-blue-700 dark:hover:text-white mt-2 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl dark:bg-gray-700 dark:text-white dark:border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          follow
        </button>
      </div>
      <div className="py-5 px-8 border-b dark:text-white">
        <div className="flex justify-between mb-3">
          <span className="font-semibold text-gray-600 text-md dark:text-white">
            Workload
          </span>
          <div className="font-extralight text-xs text-gray-600 dark:text-white">
            74%
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-4">
          <div
            className="bg-blue-600 h-1.5 rounded-full"
            style={{ width: "74%" }}
          />
        </div>
      </div>
      <div className="p-8">
        <div className="font-semibold text-gray-600 text-md mb-2 dark:text-white">
          Description:
        </div>
        <span className="text-md text-gray-600 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae minima obcaecati quod dolorum sint
          alias, possimus illum assumenda eligendi cumque?
        </span>
      </div>
    </div>
  );
}
