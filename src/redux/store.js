import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterSlice from "./slices/filterSlice";
import userSlice from "./slices/userSlice";

const reducers = combineReducers({
  userSlice,
  filterSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: [""],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
