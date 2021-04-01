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
    update_code: (state: any, { payload }) => {
      state[payload.type].code = payload.code;
      state[payload.type].loading = payload.loading;
      state[payload.type].error = payload.error;
    },
  },
});

export const { update_code } = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
