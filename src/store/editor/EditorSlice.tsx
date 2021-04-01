import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

enum ProgLang {
  js = "js",
  html = "html",
  css = "css",
}

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
      switch (payload.type) {
        case ProgLang.js:
          state[payload.type].code = payload.value;
          break;
        case ProgLang.html:
          state[payload.type].code = payload.value;
          break;
        case ProgLang.css:
          state[payload.type].code = payload.value;
          break;
      }
    },
  },
});

export const { update_code } = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
