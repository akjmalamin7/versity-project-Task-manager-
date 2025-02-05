import { apiSlice } from "../api/apiSlice";
import { ProfileData } from "./profile.models";

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileData, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
    profileUpdate: builder.mutation({
      query: (data) => ({
        url: "/profile/update",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});
export const { useGetProfileQuery, useProfileUpdateMutation } = profileApi;
