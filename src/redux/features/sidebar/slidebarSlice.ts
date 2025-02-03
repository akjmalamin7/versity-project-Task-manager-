import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SIDEBAR_INITIAL_STATE } from "./sidebar.models";

const sidebarSlice = createSlice({
  name:"sidebar",
  initialState:SIDEBAR_INITIAL_STATE,
  reducers:{
    sidebarToggle:(state, action:PayloadAction<{isToggle:boolean}>)=>{
      state.isToggle = action.payload.isToggle;
    }
  }
})
export const {sidebarToggle} = sidebarSlice.actions
export default sidebarSlice.reducer