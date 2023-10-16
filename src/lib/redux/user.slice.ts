/** @format */

import { IUserSign, TUser } from "@/types/user.type";
import http from "@/utils/http";
import userHttp from "@/utils/userHttp";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface UsersType {
  users: TUser[];
  loggedin: boolean
}

const initialState: UsersType = {
  users: [],
  loggedin: false
};

export const getUserList = createAsyncThunk("user/getAllUsers", async () => {
  const response = await http.get<TUser[]>("users");
  return response.data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (body: TUser) => {
    const resposne = await http.put<TUser>(`users/${body.id}`, body);
    return resposne.data;
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (body: TUser) => {
    const resposne = await http.post<TUser>(`users`, body);
    return resposne.data;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: string | undefined) => {
    const resposne = await http.delete<string>(`users/${id}`);
    return resposne.data;
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (body: IUserSign) => {
    const resposne = await userHttp.post<string>(`api/login`, body);
    try{
      return resposne.data;
    }catch(error){
      console.log(error)
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserList.fulfilled, (state, action) => {
        return (state = {
          ...state,
          users: action.payload,
        });
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const body = action.payload;
        const bodyId = action.payload.id;
        const indexUser = state.users.findIndex((user) => user.id == bodyId);
        toast.success("Cập nhật user thành công");

        state.users[indexUser] = body;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const newUser = action.payload;
        toast.success("Thêm user thành công");
        state.users.push(newUser);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const idDeleteUser = action.meta.arg;
        const deleteUserIndex = state.users.findIndex(
          (user) => user.id == idDeleteUser
        );
        toast.success("Xóa user thành công");
        state.users.splice(deleteUserIndex, 1);
      }).addCase(login.fulfilled, (state, action) => {
        state.loggedin == true
        console.log(window.location.href)
        window.location.href = "/"
      });
  },
});
const userReducer = userSlice.reducer;

export default userReducer;
