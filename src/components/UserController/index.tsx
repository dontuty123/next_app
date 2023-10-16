/** @format */

import { AppDispatch } from "@/lib/redux/store";
import { updateUser } from "@/lib/redux/user.slice";
import { TUser } from "@/types/user.type";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface PropsType {
  userInfo: TUser | undefined;
}

export default function UserController({ userInfo }: PropsType) {
  const [user, setUser] = useState<TUser | undefined>(userInfo || undefined);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    }
  }, [userInfo]);

  const handleSubmitBtn = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userToUpdate: TUser = {
      ...user,
    };
    user;
    dispatch(updateUser(userToUpdate));
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
    <div className="w-4/6 bg-whtie-rounded-lg px-5 ml-5 my-5 bg-white shadow-md rounded-xl">
      <div className="p-5 border-b border-gray-300">
        <span>Account Details</span>
      </div>
      <div className="pt-4 ">
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
              placeholder="Fill in you last name"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 ">
        <div className="flex items-center">
          <div className="w-full pr-4">
            <div className="font-light mb-1">Email</div>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={user?.email}
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <div className="font-light mb-1">Password</div>
            <input
              type="password"
              name="password"
              value={user?.password}
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 ">
        <div className="flex items-center">
          <div className="w-full">
            <div className="font-light mb-1">Address</div>
            <input
              type="text"
              value={user?.street}
              name="street"
              placeholder="Fill in your address"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 ">
        <div className="flex items-center">
          <div className="pr-4 w-1/2">
            <div className="font-light mb-1">City</div>
            <input
              type="text"
              value={user?.city}
              name="city"
              placeholder="Fill in your city"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 flex">
            <div className="w-3/5 pr-2">
              <div className="font-light mb-1">Phone Number</div>
              <input
                type="text"
                name="phone"
                value={user?.phone}
                placeholder="Fill in your phone"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-2/5">
              <div className="font-light mb-1">Zip</div>
              <input
                type="text"
                value={user?.zipcode}
                name="zipcode"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
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
              onChange={handleInputAreaChange}
              name="description"
              placeholder="Say something"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmitBtn}
        className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]"
      >
        Submit
      </button>
    </div>
  );
}
