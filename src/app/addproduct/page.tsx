/** @format */
"use client";

import Button from "@/components/SmallComponents/Button";
import Title from "@/components/SmallComponents/Title";
import { addProduct } from "@/lib/redux/product.slice";
import { AppDispatch } from "@/lib/redux/store";
import { IProduct } from "@/types/product.type";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [product, setProduct] = useState<IProduct>({
    category: "",
    description: "",
    image: "",
    name: "",
    price: 0,
    price_before_discount: 0,
    quantity: 0,
  });
  const dispatch = useDispatch<AppDispatch>();

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

  const handleSubmitBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (
      product?.name == "" ||
      product?.image == "" ||
      product?.category == "" ||
      product?.description == "" ||
      product?.price == undefined ||
      product?.price_before_discount == undefined ||
      product?.quantity == undefined
    ) {
      toast.warn("Vui lòng nhập đầy đủ các thông tin");
    } else {
      dispatch(addProduct(product));
    }
  };

  return (
    <div className="bg-gray-200 text-black min-h-screen pb-14 dark:bg-gray-800 dark:text-white">
      <div className="container">
        <div className="px-6">
          <Title title="Add New Product" />
          <div className="bg-white shadow-md rounded-xl dark:bg-gray-700 dark:text-white">
            <div className="p-5 border-b dark:border-b-0">
              <span>Product Details</span>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full pr-4">
                  <div className="font-light mb-1">Product name</div>
                  <input
                    type="text"
                    placeholder="Fill in your product name"
                    className="dark:bg-gray-900 dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full bg-gray-100 text-black dark:border-gray-300"
                    value={product?.name}
                    name="name"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="w-full">
                  Quantity
                  <input
                    type="text"
                    placeholder="Fill in your quantity"
                    className="dark:bg-gray-900 dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full bg-gray-100 text-black dark:border-gray-300"
                    value={product?.quantity}
                    name="quantity"
                    onChange={handleChangeInput}
                  />
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="font-light mb-1">Image Link</div>
                    <input
                      type="text"
                      placeholder="Fill in your image link"
                      className="dark:bg-gray-900 dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full bg-gray-100 text-black dark:border-gray-300"
                      value={product?.image}
                      name="image"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center">
                  <div className="pr-4 w-1/2">
                    <div className="font-light mb-1">Category</div>
                    <input
                      type="text"
                      placeholder="Fill in your category"
                      className="dark:bg-gray-900 dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full bg-gray-100 text-black dark:border-gray-300"
                      value={product?.category}
                      name="category"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="w-1/2 flex">
                    <div className="w-3/5 pr-2">
                      <div className="font-light mb-1">Price</div>
                      <input
                        type="text"
                        placeholder="Fill in your price"
                        className="dark:bg-gray-900 w-full dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-f bg-gray-100 text-black dark:border-gray-300"
                        value={product?.price}
                        name="price"
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="w-2/5">
                      <div className="font-light mb-1 truncate">
                        Price before discount
                      </div>
                      <input
                        type="text"
                        className="dark:bg-gray-900 w-full dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-f bg-gray-100 text-black dark:border-gray-300"
                        value={product?.price_before_discount}
                        name="price_before_discount"
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
                      placeholder="Say something"
                      className="dark:bg-gray-900 dark:text-white border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full bg-gray-100 text-black dark:border-gray-300"
                      value={product?.description}
                      name="description"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>
              <Button
                contentButton="Submit"
                className="bg-blue-500 mb-5 hover:bg-blue-700 text-white dark:text-black/60 font-bold py-2 px-4 rounded mt-6 w-[30%] dark:bg-gray-300  dark:text-black dark:hover:text-black dark:hover:border-black"
                onClick={handleSubmitBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
