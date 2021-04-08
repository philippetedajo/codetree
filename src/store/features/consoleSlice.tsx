import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Console } from "../../_types";

const initialConsoleState: Console = {
  isOpen: true,
};

const consoleSlice = createSlice({
  name: "console",
  initialState: initialConsoleState,
  reducers: {
    toggle_console: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle_console } = consoleSlice.actions;

export const console_state = (state: RootState) => state.console;

export default consoleSlice.reducer;
