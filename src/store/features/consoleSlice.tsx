import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Console } from "../../_types";
import { stat } from "fs";

const initialConsoleState: Console = {
  isOpen: true,
  hasLogs: false,
};

const consoleSlice = createSlice({
  name: "console",
  initialState: initialConsoleState,
  reducers: {
    toggle_console: (state) => {
      state.isOpen = !state.isOpen;
    },
    update_console_logs: (state, action: PayloadAction<boolean>) => {
      state.hasLogs = action.payload;
    },
  },
});

export const { toggle_console, update_console_logs } = consoleSlice.actions;

export const console_state = (state: RootState) => state.console;

export default consoleSlice.reducer;
