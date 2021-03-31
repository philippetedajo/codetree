import { createSlice } from "@reduxjs/toolkit";

enum ProgLang {
  js = "js",
  html = "html",
  css = "css",
}

const initialState = {
  js: {
    code: "",
    transformer: "js",
  },
  css: {
    code: "",
    transformer: "css",
  },
  html: {
    code: "",
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

export default editorSlice.reducer;
