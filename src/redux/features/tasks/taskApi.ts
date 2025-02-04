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
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/:${id}`,
        method: "DELETE",
      }),
    }),
    viewTask: builder.query({
      query: (id) => ({
        url: `/tasks/view/:${id}`,
        method: "GET",
      }),
    }),
    updateTaskByStatus: builder.mutation({
      query: ({id,status}) => ({
        url: `/tasks/view/:${id}/${status}`,
        method: "PUT",
      }),
    }),
    taskCount: builder.query({
      query: () => ({
        url: `/tasks/status-count`,
        method: "PUT",
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
  useDeleteTaskMutation,
  useViewTaskQuery,
  useUpdateTaskByStatusMutation,
  useTaskCountQuery
} = taskApi;
