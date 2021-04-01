import { createSlice } from "@reduxjs/toolkit";

const initialBundlerState = {};

const bundlerSlice = createSlice({
  name: "bundler",
  initialState: initialBundlerState,
  reducers: {},
});

export default bundlerSlice.reducer;
