import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.token,
              user: result?.data?.data
            })
          );
          dispatch(userLoggedIn({
            token: result?.data?.token,
            user: result?.data?.data
          }))
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const {useLoginMutation,useRegistrationMutation} = authApi