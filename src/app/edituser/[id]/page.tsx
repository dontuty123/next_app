/** @format */
"use client";

import Title from "@/components/SmallComponents/Title";
import UserController from "@/components/UserController";
import UserInfo from "@/components/UserInfo";
import { RootState } from "@/lib/redux/store";
import { TUser } from "@/types/user.type";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditUser() {
  const users = useSelector((state: RootState) => state.userReducer.users);
  const [userInfo, setUserInfo] = useState<TUser>();
  const { id } = useParams();

  useEffect(() => {
    const curUser = users.find((user) => user.id == id);
    setUserInfo(curUser);
  }, [users, id]);

  return (
    <div className="bg-gray-200 text-black min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="px-6">
          <Title title="User Profile" />
          <div className="flex">
            <UserInfo userInfo={userInfo} />
            <UserController userInfo={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
