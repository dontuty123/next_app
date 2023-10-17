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
    <div className="bg-gray-500 text-white p-4 sticky top-0 z-10 dark:bg-gray-900 dark:text-white dark:border-b border-white">
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
                className="hs-dark-mode-active hs-dark-mode group items-center text-white hover:text-gray-700 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                onClick={handleDarkmode}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                </svg>
              </button>
            ) : (
              <button
                className="hs-dark-mode-active hs-dark-mode group  items-center hover:text-blue-600 font-medium dark:text-white dark:hover:text-gray-300"
                onClick={handleDarkmode}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
