import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialEditorState = {
  js: {
    code: "hello js",
    transformer: "js",
    loading: true,
  },
  css: {
    code: "hello css",
    transformer: "css",
    loading: true,
  },
  html: {
    code: "hello html",
    transformer: "html",
    loading: true,
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_code: (state: any, { payload }) => {
      state[payload.type].code = payload.code;
      state[payload.type].loading = payload.loading;
    },
  },
});

export const { update_code } = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
