/** @divat */
"use client";

import Button from "@/components/SmallComponents/Button";
import { AppDispatch } from "@/lib/redux/store";
import { signup } from "@/lib/redux/user.slice";
import { IUserSign } from "@/types/user.type";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import alo from "src/assets/images/signupimg.jpg";

export default function Signup() {
  const [signupInfo, setSignupInfo] = useState<IUserSign | undefined>({
    email: "",
    password: "",
  });
  const [retypePassword, setRetypePassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      [target.name]: target.value,
    });
  };

  const handleSubmitBtn = () => {
    if (signupInfo?.password == retypePassword) {
      const newUser: IUserSign = signupInfo as IUserSign;
      console.log(newUser);
      dispatch(signup(newUser));
    }
  };

  const handleRetypeChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRetypePassword(target.value);
  };

  return (
    <div className="h-[100vh] flex bg-gray-50 w-full flex-col md:flex-row dark:bg-gray-800">
      <div className="md:w-3/5 flex items-center justify-center">
        <div className="">
          <img
            src={alo.src}
            alt="Character"
            className="md:max-w-2xl max-w-[170px] rounded-lg"
          />
        </div>
      </div>

      <div className="md:w-2/5 flex items-center justify-center">
        <div className="max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-700">
          <div className="space-y-6">
            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-700">
              <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800">
                <div>
                  <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                    Đăng ký tài khoản
                  </h2>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={signupInfo?.email}
                        onChange={handleInputChange}
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={signupInfo?.password}
                        onChange={handleInputChange}
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Nhập lại mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        autoComplete="current-password"
                        value={retypePassword}
                        onChange={handleRetypeChange}
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      contentButton="Đăng ký"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5 dark:bg-gray-300 dark:text-black dark:hover:text-black dark:hover:border-black"
                      onClick={handleSubmitBtn}
                    />

                    <span className="text-gray-500 font-semibold text-sm dark:text-white">
                      Đã có tài khoản?
                    </span>
                    <Link href="/login">
                      <span className="text-blue-600 underline font-semibold text-sm cursor-pointer ml-1">
                        Đăng nhập
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
