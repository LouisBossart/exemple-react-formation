import { createSlice } from '@reduxjs/toolkit'
import {emptyMeme} from 'orsys-tjs-meme'
const initialState = emptyMeme

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
        changeMeme:(state,action)=>{
           Object.assign(state,action.payload)
        },
        clearMeme:(state)=>{
            Object.assign(state,emptyMeme);
            delete state.id;
        }
  }
});

export const {changeMeme,clearMeme} = currentSlice.actions

export default currentSlice.reducer

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
