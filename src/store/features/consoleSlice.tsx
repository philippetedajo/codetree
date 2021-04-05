import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Console } from "../../_types";

const initialConsoleState: Console = {
  isOpen: false,
  logs: [],
};

const consoleSlice = createSlice({
  name: "console",
  initialState: initialConsoleState,
  reducers: {
    add_log: (state, { payload }) => {
      state.logs = payload;
    },
    clear_log: (state) => {
      state.logs = [];
    },
    toggle_log: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { add_log, clear_log, toggle_log } = consoleSlice.actions;

export const log_state = (state: RootState) => state.console;

export default consoleSlice.reducer;
