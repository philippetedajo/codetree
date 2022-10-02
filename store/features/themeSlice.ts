import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialStateType = {
  theme: {
    text: string;
    background: string;
    foreground: string;
    border: string;
  };
};

const initialState = {
  theme: {
    text: "#ffffff",
    background: "#171E25",
    foreground: "#1B252D",
    border: "#263440",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    set_Theme: (state) => {},
  },
});

export const { set_Theme } = themeSlice.actions;

export const theme_state = (state: RootState) => state.theme;

export default themeSlice.reducer;
