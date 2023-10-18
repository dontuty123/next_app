/** @format */
"use client";

import Button from "@/components/SmallComponents/Button";
import Dashboard from "@/components/SmallComponents/Dashboard";
import Pagination from "@/components/SmallComponents/Pagination";
import Title from "@/components/SmallComponents/Title";
import { deleteProduct, getProductList } from "@/lib/redux/product.slice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { IProduct } from "@/types/product.type";
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
  const [curProducts, setCurProducts] = useState<IProduct[]>();
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
            rowLimit={10}
            title="Products On Sale"
          />
        </div>
      </div>
    </div>
  );
}
