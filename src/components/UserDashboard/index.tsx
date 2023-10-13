/** @format */
"use client";

import { AppDispatch, RootState } from "@/lib/redux/store";
import { getUserList } from "@/lib/redux/user.slice";
import { UserType } from "@/types/user.type";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function UserDashboard() {
  const userList = useSelector((state: RootState) => state.userReducer.users);
  const [pages, setPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [curUsers, setCurUsers] = useState<UserType[]>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  useEffect(() => {
    const paginateUsers = userList.slice(0, 6);
    setPages(Math.ceil(userList.length / 6));
    setCurUsers(paginateUsers);
  }, [userList]);

  useEffect(() => {
    const firstIndex = (curPage - 1) * 6;
    let secIndex = curPage * 6;
    if (secIndex > userList?.length) {
      secIndex == userList?.length;
    }
    const paginateUsers = userList?.slice(firstIndex, secIndex);
    setCurUsers(paginateUsers);
  }, [curPage, userList]);

  //UPDATE curUsers WHEN CHANGE PAGE
  const handlePrevPage = () => {
    if (curPage == 1) {
      setCurPage(1);
    } else {
      setCurPage(curPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage == pages) {
    } else {
      setCurPage(curPage + 1);
    }
  };

  return (
    <div className="px-6 pb-20">
      <div className="text-left text-md mb-0 py-6">
        <span className="uppercase text-xs text-gray-500">dashboard</span>
        <div className="flex justify-between">
          <h3 className="page-title text-4xl font-semibold">User Dashboard</h3>
          <Link href="/adduser">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              ➕ Add User
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl  shadow-md">
        <div className="border-b p-4">
          <span className="text-md font-medium">Active Users</span>
        </div>
        <div className="p-4 border-b w-full">
          <div className="grid grid-cols-12 gap-4 text-left">
            <div className="col-span-1 font-semibold">#</div>
            <div className="col-span-2 font-semibold">First Name</div>
            <div className="col-span-2 font-semibold">Last Name</div>
            <div className="col-span-2 font-semibold">Country</div>
            <div className="col-span-2 font-semibold">Address</div>
            <div className="col-span-2 font-semibold">Phone</div>
            <div className="col-span-1 font-semibold">Action</div>
          </div>
        </div>
        {curUsers?.map((user, index) => (
          <div className="p-4 border-b w-full" key={user?.id}>
            <div className="grid grid-cols-12 gap-4 text-left">
              <div className="col-span-1 font-normal">{user?.id}</div>
              <div className="col-span-2 font-normal truncate">
                {user?.name.firstname}
              </div>
              <div className="col-span-2 font-normal truncate">
                {user?.name.lastname}
              </div>
              <div className="col-span-2 font-normal truncate">
                {user?.address.city}
              </div>
              <div className="col-span-2 font-normal truncate">
                {user?.address.street}
              </div>
              <div className="col-span-2 font-normal truncate">
                {user?.phone}
              </div>
              <Link href={`/edituser/${user.id}`}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classNames("w-6 h-6  mr-5 cursor-pointer", {
            "cursor-not-allowed": curPage == 1,
          })}
          onClick={handlePrevPage}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
        {Array(pages)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-white mx-2 rounded-sm border shadow-md cursor-pointer"
              onClick={() => setCurPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classNames("w-6 h-6  ml-5 cursor-pointer", {
            "cursor-not-allowed": curPage == 4,
          })}
          onClick={handleNextPage}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
