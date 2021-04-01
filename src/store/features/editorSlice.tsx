import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialEditorState = {
  js: {
    code: "hello js",
    transformer: "js",
    loading: false,
    error: "",
  },
  css: {
    code: "hello css",
    transformer: "css",
    loading: false,
    error: "",
  },
  html: {
    code: "hello html",
    transformer: "html",
    loading: false,
    error: "",
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_start: (state: any, { payload }) => {
      state[payload.type].loading = true;
      state[payload.type].error = "";
      state[payload.type].code = "";
    },
    update_finished: (state: any, { payload }) => {
      state[payload.type].loading = false;
      state[payload.type].error = payload.error;
      state[payload.type].code = payload.code;
    },
  },
});

export const { update_start, update_finished } = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
