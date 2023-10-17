/** @format */
"use client";

import { AppDispatch, RootState } from "@/lib/redux/store";
import { deleteUser, getUserList } from "@/lib/redux/user.slice";
import { TUser } from "@/types/user.type";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../SmallComponents/Title";
import Button from "../SmallComponents/Button";
import Pagination from "../SmallComponents/Pagination";

export default function UserDashboard() {
  const userList = useSelector((state: RootState) => state.userReducer.users);
  const [pages, setPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [curUsers, setCurUsers] = useState<TUser[]>();
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

  const handleDeleteUser = (id: string | undefined) => {
    dispatch(deleteUser(id));
  };

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
      <Title
        title="User Dashboard"
        isButton={true}
        contentButton="➕ Add User"
        directLink="/adduser"
      />
      <div className="flex flex-col bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-md">
        <div className="border-b p-4">
          <span className="text-md font-medium">Active Users</span>
        </div>
        <div className="p-4 border-b w-full">
          <div className="grid grid-cols-12 gap-4 text-left">
            <div className="col-span-1/2 font-semibold">#</div>
            <div className="col-span-2 font-semibold">First Name</div>
            <div className="col-span-2 font-semibold">Last Name</div>
            <div className="col-span-1 font-semibold">Country</div>
            <div className="col-span-2 font-semibold">Address</div>
            <div className="col-span-2 font-semibold">Phone</div>
            <div className="col-span-2 font-semibold">Action</div>
          </div>
        </div>
        {curUsers?.map(({ id, firstname, lastname, city, street, phone }) => (
          <div className="p-4 border-b w-full" key={id}>
            <div className="grid grid-cols-12 gap-4 text-left">
              <div className="col-span-1/2 font-normal">{id}</div>
              <div className="col-span-2 font-normal truncate">{firstname}</div>
              <div className="col-span-2 font-normal truncate">{lastname}</div>
              <div className="col-span-1 font-normal truncate">{city}</div>
              <div className="col-span-2 font-normal truncate">{street}</div>
              <div className="col-span-2 font-normal truncate">{phone}</div>
              <Link href={`/edituser/${id}`}>
                <Button
                  className="col-span-1 bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                  contentButton="Edit"
                />
              </Link>
              <Button
                className="col-span-1 bg-transparent hover:bg-rose-500 dark:text-white text-rose-700 font-semibold hover:text-white px-4 border border-rose-500 hover:border-transparent rounded"
                onClick={() => handleDeleteUser(id)}
                contentButton="Delete"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Pagination
          curPage={curPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          pages={pages}
          setCurPage={setCurPage}
        />
      </div>
    </div>
  );
}
