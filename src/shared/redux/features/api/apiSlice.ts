import { RootState } from "@/shared/redux/store/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Task",
    "TaskList",
    "NewTask",
    "InProgressTask",
    "CompletedTask",
    "CanceledTask",
    "TaskView",
    "TaskAnalytics",
  ],
  endpoints: () => ({}),
});
