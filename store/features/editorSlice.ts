import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { EditorValueInterface, EDITOR_TYPES } from "../../_types/editorTypes";
import { webTemplates, monacoOptions, pythonTemplate } from "../../constants";

type InitialStateType = {
  editorType: EDITOR_TYPES;
  editorValue: EditorValueInterface;
  monacoInputValue: EditorValueInterface;
  logs: any;
  isLogTabOpen: boolean;
  isTemplateOpen: boolean;
  isSettingsOpen: boolean;
  options: any;
};

const initialState = {
  editorType: EDITOR_TYPES.WebEditor,
  editorValue: webTemplates["_empty"],
  monacoInputValue: webTemplates["_empty"],
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
    set_editor_type: (state: InitialStateType, { payload }) => {
      state.editorType = payload;
    },
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
  set_editor_type,
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
