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
      invalidatesTags: ["TaskList"], 
    }),

    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`, 
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Task", "TaskList"],
      
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["Task", "TaskList", "NewTask","InProgressTask","CanceledTask","CompletedTask"], 
    }),

    getAllTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list",
        method: "GET",
      }),
      providesTags: ["TaskList","NewTask","InProgressTask","CompletedTask","CanceledTask"], 
      keepUnusedDataFor: 60,
    }),

    getNewTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/new",
        method: "GET",
      }),
      providesTags: ["TaskList","NewTask","InProgressTask","CompletedTask","CanceledTask"],
      keepUnusedDataFor: 60,
    }),

    getInProgressTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/progress",
        method: "GET",
      }),
      providesTags: ["TaskList","NewTask","InProgressTask","CompletedTask","CanceledTask"],
      keepUnusedDataFor: 60,
    }),

    getCompletedTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/completed",
        method: "GET",
      }),
      providesTags: ["TaskList","NewTask","InProgressTask","CompletedTask","CanceledTask"],
      keepUnusedDataFor: 60,
    }),

    getCanceledTask: builder.query<{ data: TaskModel[] }, void>({
      query: () => ({
        url: "/tasks/list/canceled",
        method: "GET",
      }),
      providesTags: ["TaskList","NewTask","InProgressTask","CompletedTask","CanceledTask"],
      keepUnusedDataFor: 60,
    }),

    viewTask: builder.query({
      query: (id) => ({
        url: `/tasks/view/${id}`, 
        method: "GET",
      }),
      providesTags: ["TaskView"],
      keepUnusedDataFor: 60,
    }),

    updateTaskByStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/tasks/${id}/status`, 
        method: "PUT",
        body:{status:status}
      }),
      invalidatesTags: ["Task", "TaskList", "TaskView", "NewTask","CompletedTask","InProgressTask","CanceledTask"], 
    }),

    taskCount: builder.query({
      query: () => ({
        url: `/tasks/status-count`,
        method: "GET",
      }),
      providesTags: ["TaskAnalytics"], 
      keepUnusedDataFor: 60,
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
