import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PROFILE_INITIAL_STATE, UserSchema } from "./profile.models";

 const profileSlice = createSlice({
  name:"profile",
  initialState:PROFILE_INITIAL_STATE,
  reducers:{
   userUpdate:(state, action:PayloadAction<Partial<UserSchema>>)=>{
    if(state.user){
      state.user = { ...state.user, ...action.payload };
    }
   }
  }
 })
 export const { userUpdate } = profileSlice.actions;
export default profileSlice.reducer;