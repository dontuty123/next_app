/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/utils/http";
import { IProduct } from "@/types/product.type";
import { toast } from "react-toastify";

interface ProductsType {
  products: IProduct[];
}

const initialState: ProductsType = {
  products: [],
};

export const getProductList = createAsyncThunk(
  "user/getProductList",
  async () => {
    const response = await http.get<IProduct[]>("products");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "user/addProduct",
  async (body: IProduct) => {
    const response = await http.post<IProduct>("products", body);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "user/updateProduct",
  async (body: IProduct) => {
    const response = await http.put<IProduct>(`products/${body.id}`, body);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "user/deleteProduct",
  async (id: string | undefined) => {
    const response = await http.put<IProduct>(`products/${id}`);
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
      }).addCase(addProduct.fulfilled, (state, action) => {
        const newproduct = action.payload;
        toast.success("Thêm sản phẩm thành công");
        state.products.push(newproduct);
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
