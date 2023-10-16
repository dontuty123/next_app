/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productReducer from "./product.slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userReducer: userReducer,
  productReducer: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
