import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Console } from "../../_types";

const initialConsoleState: Console = {
  isOpen: false,
  message: [],
};

const consoleSlice = createSlice({
  name: "console",
  initialState: initialConsoleState,
  reducers: {
    add_log: (state, { payload }) => {
      if (state.message.includes(payload.message) === false)
        state.message.push(payload.message);
    },
    clear_log: (state) => {
      state.message = [];
    },
    toggle_log: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { add_log, clear_log, toggle_log } = consoleSlice.actions;

export const log_state = (state: RootState) => state.console;

export default consoleSlice.reducer;
