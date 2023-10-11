import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
const initialState = emptyMeme;

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeMeme: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearMeme: (state) => {
      Object.assign(state, emptyMeme);
      delete state.id;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase('current/save/fulfilled',(state,action)=>{
        Object.assign(state,action.payload);
    })
  }
});
export const saveCurrent = createAsyncThunk("current/save", async (meme) => {
  const promiseSave = await fetch(
    `http://localhost:5679/memes${undefined !== meme.id ? "/" + meme.id : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: undefined !== meme.id ? "PUT" : "POST",
      body: JSON.stringify(meme),
    }
  );
  return await promiseSave.json();
});
export const { changeMeme, clearMeme } = currentSlice.actions;

export default currentSlice.reducer;

// const initialManualState = emptyMeme

// const manualReducer= (state = initialState, { type, payload }) => {
//   switch (type) {

//   case 'current/changeMeme':
//     return { ...state, ...payload }
//     case 'addTable':return {...state,prof1:{...state.prof1,tab:[...state.tab,]}}

//   default:
//     return state
//   }
// }
// export const changeMeme=(meme)=>{return {type:'current/changeMeme', payload: meme}}
