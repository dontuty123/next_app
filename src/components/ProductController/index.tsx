/** @format */

import { updateProduct } from "@/lib/redux/product.slice";
import { AppDispatch } from "@/lib/redux/store";
import { IProduct } from "@/types/product.type";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../SmallComponents/Button";

interface PropsType {
  productInfo: IProduct | undefined;
}

export default function ProductController({ productInfo }: PropsType) {
  const [product, setProduct] = useState<IProduct | undefined>(productInfo);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setProduct(productInfo);
  }, [productInfo]);

  const handleChangeInput = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setProduct({
      ...product,
      [target.name]: target.value,
    });
  };

  const handleSubmidBtn = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateProduct(product as IProduct));
  };

  return (
    <div className="w-4/6 bg-white  px-5 ml-5 my-5 dark:bg-gray-800 dark:text-white rounded-xl dark:border-gray-300">
      <div className="p-5 border-b border-gray-300">
        <span>Product Details</span>
      </div>
      <div className="pt-4">
        <div className="flex items-center">
          <div className="w-full pr-4">
            <div className="font-light mb-1">Product Name</div>
            <input
              type="text"
              value={product?.name}
              placeholder="Fill in your first name"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="w-full">
            Quantity
            <input
              type="text"
              value={product?.quantity}
              placeholder="Fill in your last name"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
              name="quantity"
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="w-full">
          <div className="font-light mb-1">Image Link</div>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={product?.image}
            className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
            name="image"
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center">
          <div className="pr-4 w-1/2">
            <div className="w-full">
              <div className="font-light mb-1">Category</div>
              <input
                type="text"
                value={product?.category}
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
                name="category"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-3/5 pr-2">
              <div className="font-light mb-1 truncate">
                Price_before_discount
              </div>
              <input
                type="text"
                value={product?.price_before_discount}
                placeholder="Fill in your price_before_discount"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
                name="price_before_discount"
                onChange={handleChangeInput}
              />
            </div>
            <div className="w-2/5">
              <div className="font-light mb-1">Price</div>
              <input
                type="text"
                value={product?.price}
                placeholder="Fill in your price"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
                name="price"
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center">
          <div className="w-full">
            <div className="font-light mb-1">Description</div>
            <textarea
              rows={4}
              value={product?.description}
              placeholder="Say something"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full dark:bg-gray-900 dark:text-white"
              name="description"
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
      <Button
        onClick={handleSubmidBtn}
        className="bg-blue-500 mb-5 hover:bg-blue-700 text-white dark:text-black/60 font-bold py-2 px-4 rounded mt-6 w-[30%] dark:bg-gray-300  dark:text-black dark:hover:text-black dark:hover:border-black"
        contentButton="Submit"
      />
    </div>
  );
}
