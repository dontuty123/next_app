/** @format */

import { AppDispatch } from "@/lib/redux/store";
import { updateUser } from "@/lib/redux/user.slice";
import { UserType } from "@/types/user.type";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface PropsType {
  userInfo: UserType | undefined;
}

export default function UserController({ userInfo }: PropsType) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo?.name.firstname);
      setLastName(userInfo?.name.lastname);
      setEmail(userInfo?.email);
      setPassword(userInfo?.password);
      setAddress(userInfo?.address.street);
      setCity(userInfo?.address.city);
      setZip(userInfo?.address.zipcode);
      setPhone(userInfo?.phone);
    }
  }, [userInfo]);

  const handleSubmidBtn = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userToUpdate: UserType = {
      id: userInfo?.id,
      address: {
        street: address,
        city: city,
        zipcode: zip,
      },
      email: email,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      password: password,
      phone: phone,
    };
    dispatch(updateUser(userToUpdate));
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
              value={firstName}
              placeholder="Fill in you first name"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(event.target.value)
              }
            />
          </div>
          <div className="w-full">
            Last name
            <input
              type="text"
              value={lastName}
              placeholder="Fill in you last name"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(event.target.value)
              }
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
              placeholder="example@gmail.com"
              value={email}
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className="w-full">
            <div className="font-light mb-1">Password</div>
            <input
              type="password"
              value={password}
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
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
              value={address}
              placeholder="Fill in your address"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAddress(event.target.value)
              }
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
              value={city}
              placeholder="Fill in your city"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCity(event.target.value)
              }
            />
          </div>
          <div className="w-1/2 flex">
            <div className="w-3/5 pr-2">
              <div className="font-light mb-1">Phone Number</div>
              <input
                type="text"
                value={phone}
                placeholder="Fill in your phone"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(event.target.value)
                }
              />
            </div>
            <div className="w-2/5">
              <div className="font-light mb-1">Zip</div>
              <input
                type="text"
                value={zip}
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setZip(event.target.value)
                }
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
              placeholder="Say something"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmidBtn}
        className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]"
      >
        Submit
      </button>
    </div>
  );
}
