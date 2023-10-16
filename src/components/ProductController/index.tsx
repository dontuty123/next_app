/** @format */

import { updateProduct } from "@/lib/redux/product.slice";
import { AppDispatch } from "@/lib/redux/store";
import { updateUser } from "@/lib/redux/user.slice";
import { ProductType } from "@/types/product.type";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../SmallComponents/Button";

interface PropsType {
  productInfo: ProductType | undefined;
}

export default function ProductController({ productInfo }: PropsType) {
  const [name, setName] = useState<string>("");
  const [image, setImgae] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCaregory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [price_before_discount, setPrice_before_discount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productInfo) {
      setName(productInfo?.name);
      setImgae(productInfo?.image);
      setDescription(productInfo?.description);
      setCaregory(productInfo?.category);
      setPrice(productInfo?.price);
      setPrice_before_discount(productInfo?.price_before_discount);
      setQuantity(productInfo?.quantity);
    }
  }, [productInfo]);

  const handleSubmidBtn = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const productToUpdate: ProductType = {
      id: productInfo?.id,
      description: description,
      name: name,
      category: category,
      quantity: quantity,
      image: image,
      price: price,
      price_before_discount: price_before_discount,
    };
    dispatch(updateProduct(productToUpdate));
  };

  return (
    <div className="w-4/6 bg-whtie-rounded-lg px-5 ml-5 my-5 bg-white shadow-md rounded-xl">
      <div className="p-5 border-b border-gray-300">
        <span>Product Details</span>
      </div>
      <div className="pt-4 ">
        <div className="flex items-center">
          <div className="w-full pr-4">
            <div className="font-light mb-1">Product Name</div>
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
                setImgae(event.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="pt-4 ">
        <div className="w-full">
          <div className="font-light mb-1">Image Link</div>
          <input
            type="description"
            placeholder="example@gmail.com"
            value={image}
            className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(event.target.value)
            }
          />
        </div>
      </div>

      <div className="pt-4 ">
        <div className="flex items-center">
          <div className="pr-4 w-1/2">
            <div className="w-full">
              <div className="font-light mb-1">Category</div>
              <input
                type="category"
                value={category}
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCaregory(event.target.value)
                }
              />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-3/5 pr-2">
              <div className="font-light mb-1">Price_before_discount</div>
              <input
                type="text"
                value={price_before_discount}
                placeholder="Fill in your price_before_discount"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice_before_discount(Number(event.target.value))
                }
              />
            </div>
            <div className="w-2/5">
              <div className="font-light mb-1">Price</div>
              <input
                type="text"
                value={price}
                placeholder="Fill in your price"
                className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(Number(event.target.value))
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
              value={description}
              placeholder="Say something"
              className="border border-gray-300 font-light focus:outline-none rounded-md text-sm p-2 w-full"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(event.target.value)
              }
            />
          </div>
        </div>
      </div>
      <Button
        onClick={handleSubmidBtn}
        className="bg-blue-500 mb-5 hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded mt-6 w-[30%]"
        contentButton="Submit"
      />
        
    </div>
  );
}
