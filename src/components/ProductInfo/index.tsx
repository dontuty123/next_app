/** @format */

import { ProductType } from "@/types/product.type";
import { TUser } from "@/types/user.type";
import React from "react";

interface PropsType {
  productInfo: ProductType | undefined;
}

export default function ProductInfo({ productInfo }: PropsType) {
  return (
    <div className="w-2/6 bg-white rounded-xl pt-4 shadow-md my-5 mr-5">
      <div className="flex flex-col items-center p-5 border-b">
        <img
          src={productInfo?.image}
          alt={productInfo?.name}
          className="rounded-full w-[35%] h-full mb-5"
        />
        <div className="text-2xl font-semibold">{productInfo?.name}</div>
        <span className="text-md text-gray-500">
          Category: {productInfo?.category}
        </span>
      </div>
      <div className="py-5 px-8 border-b">
        <span className="text-md text-gray-500">Sold: {productInfo?.sold}</span>
      </div>
      <div className="p-8">
        <div className="font-semibold text-gray-600 text-md mb-2">
          Description:
        </div>
        <span className="text-md text-gray-600">
          {productInfo?.description}
        </span>
      </div>
    </div>
  );
}
