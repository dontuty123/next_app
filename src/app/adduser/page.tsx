/** @format */
"use client";

import Button from "@/components/SmallComponents/Button";
import Title from "@/components/SmallComponents/Title";
import { AppDispatch } from "@/lib/redux/store";
import { addUser } from "@/lib/redux/user.slice";
import { TUser } from "@/types/user.type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddUser() {
  const [user, setUser] = useState<TUser | undefined>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      user?.firstname == "" ||
      user?.lastname == "" ||
      user?.email == "" ||
      user?.password == "" ||
      user?.street == "" ||
      user?.city == "" ||
      user?.phone == "" ||
      user?.description == "" ||
      user?.zipcode == ""
    ) {
      console.log("as");
      toast.warn("Vui lòng điền đầy đủ thông tin");
    } else {
      const newUser: TUser = {
        street: user?.street,
        city: user?.city,
        zipcode: user?.zipcode,
        email: user?.email,
        firstname: user?.firstname,
        lastname: user?.lastname,
        password: user?.password,
        description: user?.description,
        phone: user?.phone,
      };
      dispatch(addUser(newUser));
      router.push("/");
    }
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleInputAreaChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen pb-14">
      <div className="container">
        <div className="px-6">
          <Title title="Add New User" />

          <div className="bg-white shadow-md rounded-xl">
            <div className="p-5 border-b">
              <span>Account Details</span>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full pr-4">
                  <div className="font-light mb-1">First name</div>
                  <input
                    type="text"
                    value={user?.firstname}
                    name="firstname"
                    placeholder="Fill in you first name"
                    className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full">
                  Last name
                  <input
                    type="text"
                    value={user?.lastname}
                    name="lastname"
                    onChange={handleInputChange}
                    placeholder="Fill in you last name"
                    className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
              </div>
              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="w-full pr-4">
                    <div className="font-light mb-1">Email</div>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={user?.email}
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full">
                    <div className="font-light mb-1">Password</div>
                    <input
                      type="password"
                      value={user?.password}
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="font-light mb-1">Phone Number</div>
                    <input
                      type="text"
                      value={user?.phone}
                      placeholder="Fill in your phone"
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="pr-4 w-1/2">
                    <div className="font-light mb-1">Address</div>
                    <input
                      type="text"
                      value={user?.street}
                      placeholder="Fill in your address"
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      name="street"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2 flex">
                    <div className="w-3/5 pr-2">
                      <div className="font-light mb-1">City</div>
                      <input
                        type="text"
                        value={user?.city}
                        placeholder="Fill in your city"
                        className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                        name="city"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-2/5">
                      <div className="font-light mb-1">Zip</div>
                      <input
                        type="text"
                        value={user?.zipcode}
                        className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                        name="zipcode"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="font-light mb-1">Description</div>
                    <textarea
                      rows={4}
                      value={user?.description}
                      name="description"
                      onChange={handleInputAreaChange}
                      placeholder="Say something"
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]"
                onClick={handleSubmitBtn}
                contentButton="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
