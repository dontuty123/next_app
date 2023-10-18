/** @format */

import { AppDispatch, RootState } from "@/lib/redux/store";
import { darkmode, logout } from "@/lib/redux/user.slice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [login, setLogin] = useState<Boolean>(false);
  const reducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = reducer.loggedin;
  const isDarkmode = reducer.darkmode;

  useEffect(() => {
    setLogin(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDarkmode = () => {
    dispatch(darkmode());
    if (document.documentElement.classList.value === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="w-full bg-gray-500 text-white p-4 sticky top-0 z-10 dark:bg-gray-900 dark:text-white dark:border-b border-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">NextJS App</h1>
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          {login ? (
            <>
              <Link href="/" className="hover:text-blue-400 transition">
                User
              </Link>
              <Link href="/products" className="hover:text-blue-400 transition">
                Product
              </Link>
              <button
                className="hover:text-blue-400 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-blue-400 transition">
              Login
            </Link>
          )}
          <div>
            {isDarkmode == false ? (
              <button
                className="hs-dark-mode-active hs-dark-mode group items-center hover:text-gray-700 font-medium dark:text-white  dark:hover:text-gray-500"
                onClick={handleDarkmode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="hs-dark-mode-active hs-dark-mode group  items-center font-medium dark:text-white hover:text-gray-700"
                onClick={handleDarkmode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
