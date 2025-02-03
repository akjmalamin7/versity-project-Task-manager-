import { apiSlice } from "../api/apiSlice";
import { ProfileData } from "./profile.models";

export const profileApi = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getProfile:builder.query<ProfileData,void>({
      query:()=>({
        url:"/profile",
        method:"GET",
      })
    })
  })
})
export const {useGetProfileQuery} = profileApi