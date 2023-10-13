/** @format */

import React from "react";

export default function AddUser() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container">
        <div className="px-6">
          <div className="text-left text-md mb-0 py-6">
            <span className="uppercase text-xs text-gray-500">dashboard</span>
            <h3 className="page-title text-4xl font-semibold">Add New User</h3>
          </div>
          <div className="bg-white shadow-md rounded-xl">
            <div className="p-5 border-b">
              <span>Account Details</span>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full pr-4">
                  <div className="font-light mb-2">First Name</div>
                  <input
                    type="text"
                    placeholder="Fill in you first name"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="font-light mb-2">Last Name</div>
                  <input
                    type="text"
                    placeholder="Fill in you last name"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full pr-4">
                  <div className="font-light mb-2">Email</div>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="font-light mb-2">Password</div>
                  <input
                    type="password"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full">
                  <div className="font-light mb-2">Address</div>
                  <input
                    type="text"
                    placeholder="Fill in your address"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="pr-4 w-1/2">
                  <div className="font-light mb-2">City</div>
                  <input
                    type="text"
                    placeholder="Fill in your city"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
                <div className="w-1/2 flex">
                  <div className="w-3/5 pr-2">
                    <div className="font-light mb-2">State</div>
                    <select
                      id="countries"
                      className="bg-gray-50 border font-light focus:outline-none text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="w-2/5">
                    <div className="font-light mb-2">Zip</div>
                    <input
                      type="text"
                      className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full">
                  <div className="font-light mb-2">Description</div>
                  <textarea
                    rows={4}
                    placeholder="Say something"
                    className="border font-light focus:outline-none rounded-md text-sm p-2 w-full"
                  />
                </div>
              </div>
              <button className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
