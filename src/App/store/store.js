import {combineReducers, configureStore} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import modalReducer from './modalSlice'
export const store=configureStore({
    reducer:combineReducers({current: currentReducer, modal:modalReducer})
});


// console.log(changeMeme({text:'coucou'}));

// console.log(store.getState());

// store.subscribe(()=>{
//     console.log(store.getState(),store.getState().current.titre);
// })
// store.dispatch({type:'current/changeMeme',payload:{titre:'coucou'}});
// store.dispatch(changeMeme({text:'mon nouveau meme'}));
// store.dispatch(clearMeme());
