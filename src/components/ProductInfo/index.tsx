/** @format */

import { IProduct } from "@/types/product.type";
import { TUser } from "@/types/user.type";
import React from "react";

interface PropsType {
  productInfo: IProduct | undefined;
}

export default function ProductInfo({ productInfo }: PropsType) {
  return (
    <div className="w-2/6 bg-white dark:bg-gray-800 rounded-xl pt-4 shadow-md my-5 mr-5">
      <div className="flex flex-col items-center p-5 border-b">
        <div className="relative w-[80%] pt-[80%] mb-5">
          <img
            src={productInfo?.image}
            alt={productInfo?.name}
            className="absolute top-0 left-0 h-full w-full bg-white object-cover"
          />
        </div>
        <div className="text-2xl font-semibold dark:text-white">
          {productInfo?.name}
        </div>
        <span className="text-md text-gray-500 dark:text-gray-300">
          Category: {productInfo?.category}
        </span>
      </div>
      <div className="py-5 px-8 border-b">
        <span className="text-md text-gray-500 dark:text-gray-300">
          Sold: {productInfo?.sold}
        </span>
      </div>
      <div className="p-8">
        <div className="font-semibold text-gray-600 text-md dark:text-gray-300 mb-2">
          Description:
        </div>
        <span className="text-md text-gray-600 dark:text-gray-300">
          {productInfo?.description}
        </span>
      </div>
    </div>
  );
}
