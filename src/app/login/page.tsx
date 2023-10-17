/** @format */

"use client";
import "src/assets/login.css";

import alo from "src/assets/images/zyro-image.png";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { login } from "@/lib/redux/user.slice";
import Button from "@/components/SmallComponents/Button";
import { IUserSign } from "@/types/user.type";

export default function Login() {
  const [loginUser, setLoginUser] = useState<IUserSign>({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({
      ...loginUser,
      [target.name]: target.value,
    });
  };
  const handleLoginBtn = () => {
    dispatch(login(loginUser));
  };

  return (
    <div className="h-[100vh] flex text-black bg-gray-200 w-full flex-col md:flex-row dark:bg-gray-800 dark:text-white">
      <div className="md:w-3/5 flex items-center justify-center">
        <div className="character waving">
          <img
            src={alo.src}
            alt="Character"
            className="md:max-w-lg max-w-[170px]"
          />
        </div>
      </div>

      <div className="md:w-2/5 flex items-center justify-center">
        <div className="max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-700">
          <div className="space-y-6">
            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800">
              <div className="max-w-md w-full p-6 bg-white rounded-lg dark:bg-gray-800">
                <div>
                  <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                    Đăng nhập vào tài khoản của bạn
                  </h2>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Tài khoản
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={loginUser.email}
                        onChange={handleChangeInput}
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={loginUser.password}
                        onChange={handleChangeInput}
                        autoComplete="current-password"
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      contentButton="Đăng nhập"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5 dark:bg-gray-300 dark:text-black dark:hover:text-black dark:hover:border-black"
                      onClick={handleLoginBtn}
                    ></Button>

                    <span className="text-gray-500 font-semibold text-sm dark:text-gray-300">
                      Chưa có tài khoản?
                    </span>

                    <Link href="/signup">
                      <span className="text-blue-600 underline font-semibold text-sm cursor-pointer ml-1 dark:text-blue-400 dark:hover:text-blue-600">
                        Đăng ký
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
