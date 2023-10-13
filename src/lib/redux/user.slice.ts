/** @format */

import { UserType } from "@/types/user.type";
import http from "@/utils/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UsersType {
  users: UserType[];
}

const initialState: UsersType = {
  users: [],
};

export const getUserList = createAsyncThunk("user/getAllUsers", async () => {
  const response = await http.get<UserType[]>("users");
  return response.data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (body: UserType) => {
    const resposne = await http.put<UserType>(`users/${body.id}`, body);
    return resposne.data;
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
        state.users[indexUser] = body;
      });
  },
});
const userReducer = userSlice.reducer;

export default userReducer;
