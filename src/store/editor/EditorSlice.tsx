import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  js: {
    code: "hello js",
    transformer: "js",
  },
  css: {
    code: "hello css",
    transformer: "css",
  },
  html: {
    code: "hello html",
    transformer: "html",
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    update_code: (state: any, { payload }) => {
      state[payload.type].code = payload.value;
    },
  },
});

export const { update_code } = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
