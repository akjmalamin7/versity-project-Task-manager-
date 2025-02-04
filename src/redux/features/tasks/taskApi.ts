import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    createTask:builder.mutation({
      query:(data)=>({
        url:"/tasks/create",
        method:"POST",
        body:data
      })
    }),
    getAllTask:builder.query({
      query:()=>({
        url:"/tasks/list",
        method:"GET",
      })
    }),
    getNewTask:builder.query({
      query:()=>({
        url:"/tasks/list/new",
        method:"GET",
      })
    }),
    getInProgressTask:builder.query({
      query:()=>({
        url:"/tasks/list/progress",
        method:"GET",
      })
    }),
    getCompletedTask:builder.query({
      query:()=>({
        url:"/tasks/list/completed",
        method:"GET",
      })
    }),
    getCanceledTask:builder.query({
      query:()=>({
        url:"/tasks/list/canceled",
        method:"GET",
      })
    }),
  })
})
export const {useCreateTaskMutation,useGetAllTaskQuery,useGetCanceledTaskQuery,useGetCompletedTaskQuery,useGetInProgressTaskQuery,useGetNewTaskQuery} = taskApi