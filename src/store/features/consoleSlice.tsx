import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Console } from "../../_types";

const initialConsoleState: Console = {
  isOpen: false,
};

const consoleSlice = createSlice({
  name: "console",
  initialState: initialConsoleState,
  reducers: {
    toggle_log: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle_log } = consoleSlice.actions;

export const log_state = (state: RootState) => state.console;

export default consoleSlice.reducer;
