import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UpdateCode } from "../../_types/editor_types";
import { _empty } from "../../components/editor/templates";

const initialEditorState = {
  codeEditor: _empty,
  initialMonacoValue: { js: "", html: "", css: "" },
  isConsoleOpen: false,
  hasConsoleLogs: false,
  isTemplateModalOpen: false,
  isCreateTreeModalOpen: false,
  iframeErr: null,
  singleTree: null,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (state: any, { payload }: PayloadAction<UpdateCode>) => {
      state.codeEditor.languages[payload.type].code.data = payload.code;
    },
    update_console_logs: (state, action: PayloadAction<boolean>) => {
      state.hasConsoleLogs = action.payload;
    },
    update_template_modal: (state, { payload }) => {
      state.isTemplateModalOpen = payload;
    },
    update_create_tree_modal: (state, { payload }) => {
      state.isCreateTreeModalOpen = payload;
    },
    toggle_console: (state) => {
      state.isConsoleOpen = !state.isConsoleOpen;
    },
    update_iframe_error: (state, { payload }) => {
      state.iframeErr = payload;
    },
    set_initial_Monaco_Value: (state, { payload }) => {
      state.initialMonacoValue = payload;
    },
    set_single_tree: (state, { payload }) => {
      state.singleTree = payload;
    },
  },
});

export const {
  update_sync_code,
  update_console_logs,
  toggle_console,
  update_template_modal,
  update_create_tree_modal,
  update_iframe_error,
  set_initial_Monaco_Value,
  set_single_tree,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
