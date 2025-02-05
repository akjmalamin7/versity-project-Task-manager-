import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_INITIAL_STATE, UserSchema } from "./auth.types";

const authSlice = createSlice({
  name:"auth",
  initialState:AUTH_INITIAL_STATE,
  reducers:{
    userLoggedIn:(state, action:PayloadAction<{token:string, user:UserSchema}>)=>{
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    userLoggedOut:(state)=>{
      state.token = "";
      state.user = {} as UserSchema; 
    },
  },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions
export default authSlice.reducer