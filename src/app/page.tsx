/** @format */
"use client";

import UserDashboard from "@/components/UserDashboard";
import { RootState } from "@/lib/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Login from "./login/page";

export default function Home() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.loggedin
  );
  const [login, setlogin] = useState<boolean>(false);

  useEffect(() => {
    setlogin(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      {login ? (
        <div className="bg-gray-200 min-h-screen dark:bg-gray-900">
          <div className="container">
            <UserDashboard />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
