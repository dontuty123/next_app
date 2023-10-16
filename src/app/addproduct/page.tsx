/** @format */
"use client";

import Button from "@/components/SmallComponents/Button";
import Title from "@/components/SmallComponents/Title";
import { addProduct } from "@/lib/redux/product.slice";
import { AppDispatch } from "@/lib/redux/store";
import { ProductType } from "@/types/product.type";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [price_before_discount, setPrice_before_discount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (
      name == "" ||
      image == "" ||
      category == "" ||
      description == "" ||
      price == undefined ||
      price_before_discount == undefined ||
      quantity == undefined
    ) {
      toast.warn("Vui lòng nhập đầy đủ các thông tin");
    } else {
      const newProduct: ProductType = {
        name: name,
        category: category,
        description: description,
        image: image,
        price: price,
        price_before_discount: price_before_discount,
        quantity: quantity,
      };
      console.log("success");
      dispatch(addProduct(newProduct));
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pb-14">
      <div className="container">
        <div className="px-6">
          <Title title="Add New Product" />
          <div className="bg-white shadow-md rounded-xl">
            <div className="p-5 border-b">
              <span>Product Details</span>
            </div>
            <div className="pt-6 pl-5 pr-5">
              <div className="flex items-center">
                <div className="w-full pr-4">
                  <div className="font-light mb-1">Product name</div>
                  <input
                    type="text"
                    value={name}
                    placeholder="Fill in you first name"
                    className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setName(event.target.value)
                    }
                  />
                </div>
                <div className="w-full">
                  Quantity
                  <input
                    type="text"
                    value={quantity}
                    placeholder="Fill in you last name"
                    className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setQuantity(Number(event.target.value))
                    }
                  />
                </div>
              </div>

              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="font-light mb-1">Image Link</div>
                    <input
                      type="text"
                      value={image}
                      placeholder="Fill in your quantity"
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setImage(event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 ">
                <div className="flex items-center">
                  <div className="pr-4 w-1/2">
                    <div className="font-light mb-1">Category</div>
                    <input
                      type="text"
                      value={category}
                      placeholder="Fill in your price"
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCategory(event.target.value)
                      }
                    />
                  </div>
                  <div className="w-1/2 flex">
                    <div className="w-3/5 pr-2">
                      <div className="font-light mb-1">Price</div>
                      <input
                        type="text"
                        value={price}
                        placeholder="Fill in your price_before_discount"
                        className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setPrice(Number(event.target.value))}
                      />
                    </div>
                    <div className="w-2/5">
                      <div className="font-light mb-1">
                        Price before discount
                      </div>
                      <input
                        type="text"
                        value={price_before_discount}
                        className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                          setPrice_before_discount(Number(event.target.value))
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
                      value={description}
                      className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => setDescription(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button
                contentButton="Submit"
                className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]"
                onClick={handleSubmitBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
