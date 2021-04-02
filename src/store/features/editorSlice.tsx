import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialEditorState = {
  js: {
    code: {
      data: "hello js",
      error: "",
      loading: false,
    },
    transformer: "js",
  },
  css: {
    code: {
      data: "hello css",
      error: "",
      loading: false,
    },
    transformer: "css",
  },
  html: {
    code: {
      data: "hello html",
      error: "",
      loading: false,
    },
    transformer: "html",
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (state: any, { payload }) => {
      state[payload.type].code.data = payload.code;
    },
    update_start: (state: any, { payload }) => {
      state[payload.type].code.loading = true;
      state[payload.type].code.error = "";
      state[payload.type].code.data = "";
    },
    update_finished: (state: any, { payload }) => {
      state[payload.type].code.loading = false;
      state[payload.type].code.error = payload.error;
      state[payload.type].code.data = payload.code;
    },
  },
});

export const {
  update_sync_code,
  update_start,
  update_finished,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
