/** @format */

import { AppDispatch, RootState } from "@/lib/redux/store";
import { logout } from "@/lib/redux/user.slice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [login, setLogin] = useState<Boolean>(false);
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.loggedin
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setLogin(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-gray-700 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">NextJS App</h1>
          </Link>
        </div>
        <div className="space-x-4">
          {login ? (
            <>
              <Link href="#" className="hover:text-blue-400 transition">
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
        </div>
      </div>
    </div>
  );
}
