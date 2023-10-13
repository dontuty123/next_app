/** @format */
"use client";

import UserController from "@/components/UserController";
import UserInfo from "@/components/UserInfo";
import { RootState } from "@/lib/redux/store";
import { UserType } from "@/types/user.type";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditUser() {
  const users = useSelector((state: RootState) => state.userReducer.users);
  const [userInfo, setUserInfo] = useState<UserType>();
  const { id } = useParams();

  useEffect(() => {
    const curUser = users.find((user) => user.id == id);
    setUserInfo(curUser);
  }, [users, id]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container">
        <div className="px-6">
          <div className="text-left text-md mb-0 py-6">
            <span className="uppercase text-xs text-gray-500">dashboard</span>
            <h3 className="page-title text-4xl font-semibold">User Profile</h3>
          </div>
          <div className="flex">
            <UserInfo userInfo={userInfo} />
            <UserController userInfo={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
