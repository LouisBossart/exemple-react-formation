import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RESSOURCES_URL, REST_ADR } from "../config/constante";

const initialState = { images: [], memes: [] };
function isActionWithNumberPayload(action) {
  const r=/ressources\/load\w*\/rejected/;

  const m = r.exec(action.type);
    return m!==null;
}
const ressourcesSlice = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('ressources/loadImages/fulfilled',(state,action)=>{
        state.images.splice(0);
        state.images.push(...action.payload);
    });
    builder.addCase('ressources/loadMemes/fulfilled',(state,action)=>{
        state.memes.splice(0);
        state.memes.push(...action.payload);
    });
    // builder.addCase('ressources/loadImages/rejected',()=>{console.log('erreur de chargement')})
    builder.addMatcher(isActionWithNumberPayload, (s, a) => console.error('ERREUR DE CHARGEMENT une requete est rejetée',a));
  },
});
export const loadImages = createAsyncThunk(
  "ressources/loadImages",
  async () => {
    const primage = await fetch(`${REST_ADR}${RESSOURCES_URL.images}`);
    return await primage.json();
  }
);
export const loadMemes = createAsyncThunk(
    "ressources/loadMemes",
    async () => {
      const primage = await fetch(`${REST_ADR}${RESSOURCES_URL.memes}`);
      return await primage.json();
    }
  );
//export const {fillImages} = ressourcesSlice.actions

export default ressourcesSlice.reducer;
