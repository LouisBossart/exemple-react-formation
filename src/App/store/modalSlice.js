import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    title: "titre",
    isOpen: true,
    message: "message",
  }

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show:(state,action)=>{
        state.message=action.payload.message;
        state.title=action.payload.title;
        state.isOpen=true;
    },
    hide:(state)=>{
        state.title=undefined;
        state.isOpen=false;
    }
  }
});

export const {show,hide} = modalSlice.actions
export default modalSlice.reducer