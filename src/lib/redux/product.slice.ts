/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/utils/http";
import { ProductType } from "@/types/product.type";
import { toast } from "react-toastify";

interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: [],
};

export const getProductList = createAsyncThunk(
  "user/getProductList",
  async () => {
    const response = await http.get<ProductType[]>("products");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "user/addProduct",
  async (body: ProductType) => {
    const response = await http.post<ProductType>("products", body);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "user/updateProduct",
  async (body: ProductType) => {
    const response = await http.put<ProductType>(`products/${body.id}`, body);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "user/deleteProduct",
  async (id: string | undefined) => {
    const response = await http.put<ProductType>(`products/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductList.fulfilled, (state, action) => {
        return (state = {
          ...state,
          products: action.payload,
        });
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const body = action.payload;
        const bodyId = action.payload.id;
        const indexProduct = state.products.findIndex(
          (product) => product.id == bodyId
        );
        toast.success("Cập nhật user thành công");

        state.products[indexProduct] = body;
      }).addCase(deleteProduct.fulfilled,(state, action) => {
        const idDeleteProduct = action.meta.arg;
        const deleteProductIndex = state.products.findIndex(
          (product) => product.id == idDeleteProduct
        );
        toast.success("Xóa product thành công");
        state.products.splice(deleteProductIndex, 1);
      });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
