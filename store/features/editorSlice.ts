import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { EditorValueInterface } from "../../_types/editorTypes";
import { treeTemplates, monacoOptions } from "../../constants";

type InitialStateType = {
  editorValue: EditorValueInterface;
  monacoInputValue: EditorValueInterface;
  logs: any;
  isLogTabOpen: boolean;
  isTemplateOpen: boolean;
  isSettingsOpen: boolean;
  options: any;
};

const initialState = {
  editorValue: treeTemplates["_empty"],
  monacoInputValue: treeTemplates["_empty"],
  logs: [],
  isLogTabOpen: false,
  isTemplateOpen: true,
  isSettingsOpen: false,
  options: monacoOptions,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    set_editor_value: (state: InitialStateType, { payload }) => {
      state.editorValue = payload;
    },
    update_editor_code: (state: InitialStateType, { payload }) => {
      state.editorValue.tabs[payload.type].data = payload.content;
    },
    update_logs: (state: InitialStateType, { payload }) => {
      state.logs = [...state.logs, payload];
    },

    clear_logs: (state: InitialStateType) => {
      state.logs = [];
    },
    toggle_logs_tab: (state: InitialStateType) => {
      state.isLogTabOpen = !state.isLogTabOpen;
    },
    set_settings_modal: (state: InitialStateType, { payload }) => {
      state.isSettingsOpen = payload;
    },
    set_template_modal: (state: InitialStateType, { payload }) => {
      state.isTemplateOpen = payload;
    },
    set_monaco_input_value: (
      state: InitialStateType,
      { payload }: PayloadAction<EditorValueInterface>
    ) => {
      state.monacoInputValue = payload;
    },
    set_options: (state: InitialStateType, { payload }) => {
      state.options = payload;
    },
  },
});

export const {
  update_editor_code,
  update_logs,
  clear_logs,
  toggle_logs_tab,
  set_settings_modal,
  set_template_modal,
  set_monaco_input_value,
  set_editor_value,
  set_options,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
