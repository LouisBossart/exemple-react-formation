import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    title: "titre",
    isOpen: false,
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
  },
  extraReducers(builder){
    builder.addCase('current/save/pending',(s)=>{s.isOpen=true;s.message='enregistrement en cours'})
    builder.addCase('current/save/fulfilled',(s)=>{s.isOpen=false;})
  }
});

export const {show,hide} = modalSlice.actions
export default modalSlice.reducer