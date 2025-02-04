import { apiSlice } from "../api/apiSlice";
import { TaskModel } from "./task.models";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks/create",
        method: "POST",
        body: data,
      }),
    }),
    getAllTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list",
        method: "GET",
      }),
    }),

    getNewTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/new",
        method: "GET",
      }),
    }),
    getInProgressTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/progress",
        method: "GET",
      }),
    }),
    getCompletedTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/completed",
        method: "GET",
      }),
    }),
    getCanceledTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/canceled",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useGetCanceledTaskQuery,
  useGetCompletedTaskQuery,
  useGetInProgressTaskQuery,
  useGetNewTaskQuery,
} = taskApi;
