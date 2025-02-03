import authSliceReducer from "@/redux/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
export const store =configureStore({
  reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth: authSliceReducer
  },
  middleware:(getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch