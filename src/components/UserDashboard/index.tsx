/** @format */
"use client";

import { AppDispatch, RootState } from "@/lib/redux/store";
import { getUserList } from "@/lib/redux/user.slice";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../SmallComponents/Title";
import Dashboard from "../SmallComponents/Dashboard";

export default function UserDashboard() {
  const userList = useSelector((state: RootState) => state.userReducer.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const curCols = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "firstname",
      headerName: "First Name",
      width: 120,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 120,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
  ];

  return (
    <div className="px-6 pb-20">
      <Title
        title="User Dashboard"
        isButton={true}
        contentButton="➕ Add User"
        directLink="/adduser"
      />

      <Dashboard
        curCols={curCols}
        curRows={userList}
        title="Active Users"
        rowLimit={6}
      />
    </div>
  );
}
