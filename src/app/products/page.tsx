/** @format */
"use client";

import Button from "@/components/SmallComponents/Button";
import Pagination from "@/components/SmallComponents/Pagination";
import Title from "@/components/SmallComponents/Title";
import { deleteProduct, getProductList } from "@/lib/redux/product.slice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { ProductType } from "@/types/product.type";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const [pages, setPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [curProducts, setCurProducts] = useState<ProductType[]>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const paginateUsers = products.slice(0, 6);
    setPages(Math.ceil(products.length / 6));
    setCurProducts(paginateUsers);
  }, [products]);

  useEffect(() => {
    const firstIndex = (curPage - 1) * 6;
    let secIndex = curPage * 6;
    if (secIndex > products?.length) {
      secIndex == products?.length;
    }
    const paginateUsers = products?.slice(firstIndex, secIndex);
    setCurProducts(paginateUsers);
  }, [curPage, products]);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const handlePrevPage = () => {
    if (curPage == 1) {
      setCurPage(1);
    } else {
      setCurPage(curPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage == pages) {
    } else {
      setCurPage(curPage + 1);
    }
  };

  const handleDeleteProduct = (id: string | undefined) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container">
        <div className="px-6 pb-20">
          <Title
            title="Product Dashboard"
            isButton={true}
            contentButton="➕ Add Product"
            directLink="/addproduct"
          />
          <div className="flex flex-col bg-white rounded-2xl  shadow-md">
            <div className="border-b p-4">
              <span className="text-md font-medium">Active Users</span>
            </div>
            <div className="p-4 border-b w-full">
              <div className="grid grid-cols-10 gap-4 text-left">
                <div className="col-span-1 font-semibold">#</div>
                <div className="col-span-1 font-semibold">Image</div>
                <div className="col-span-2 font-semibold">Name</div>
                <div className="col-span-1 font-semibold">Price</div>
                <div className="col-span-1 font-semibold">Quantity</div>
                <div className="col-span-1 font-semibold">Sold</div>
                <div className="col-span-1 font-semibold">Category</div>
                <div className="col-span-2 font-semibold">Action</div>
              </div>
            </div>
            {curProducts?.map((product, index) => (
              <div className="p-4 border-b w-full" key={product?.id}>
                <div className="grid grid-cols-10 gap-4 text-left">
                  <div className="col-span-1 font-normal">{product?.id}</div>
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="col-span-1 w-6 h-6 rounded-full"
                  />
                  <div className="col-span-2 font-normal truncate">
                    {product?.name}
                  </div>
                  <div className="col-span-1 font-normal truncate">
                    {product?.price}
                  </div>
                  <div className="col-span-1 font-normal truncate">
                    {product?.quantity}
                  </div>
                  <div className="col-span-1 font-normal truncate">
                    {product?.sold}
                  </div>
                  <div className="col-span-1 font-normal truncate">
                    {product?.category}
                  </div>
                  <Link href={`/editproduct/${product.id}`}>
                    <Button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                      contentButton="Edit"
                    />
                  </Link>
                  <Button
                    className="bg-transparent hover:bg-rose-500 text-rose-700 font-semibold truncate hover:text-white px-4 border border-rose-500 hover:border-transparent rounded"
                    onClick={() => handleDeleteProduct(product?.id)}
                    contentButton="Delete"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <Pagination
              curPage={curPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              pages={pages}
              setCurPage={setCurPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
