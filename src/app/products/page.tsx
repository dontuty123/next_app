/** @format */
"use client";

import Dashboard from "@/components/SmallComponents/Dashboard";
import Title from "@/components/SmallComponents/Title";
import { getProductList } from "@/lib/redux/product.slice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const curCols = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "name",
      headerName: "Product Name",
    },
    {
      field: "price",
      headerName: "Price",
      width: 140,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 140,
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 140,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
  ];

  return (
    <div className="bg-gray-200 text-black min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="px-6 pb-20">
          <Title
            title="Product Dashboard"
            isButton={true}
            contentButton="➕ Add Product"
            directLink="/addproduct"
          />
          <Dashboard
            curCols={curCols}
            curRows={products}
            title="Products On Sale"
          />
        </div>
      </div>
    </div>
  );
}
