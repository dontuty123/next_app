/** @format */
"use client";

import ProductController from "@/components/ProductController";
import ProductInfo from "@/components/ProductInfo";
import Title from "@/components/SmallComponents/Title";
import { RootState } from "@/lib/redux/store";
import { ProductType } from "@/types/product.type";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditProductPage = () => {
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const [productInfo, setProductInfo] = useState<ProductType>();
  const { id } = useParams();

  useEffect(() => {
    const curProduct = products.find((product) => product.id == id);
    setProductInfo(curProduct);
  }, [products, id]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container">
        <div className="px-6">
          <Title title="Product Information" />
          <div className="flex">
            <ProductInfo productInfo={productInfo} />
            <ProductController productInfo={productInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
