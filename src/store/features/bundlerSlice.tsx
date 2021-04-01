import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import bundler from "../../bundler";
import { RootState } from "../store";

interface initialBundlerStateInterface {
  loading: boolean;
  code: string;
  err: string;
}

interface bundlerPayloadInterface {
  code: string;
  error: string;
}

const initialBundlerState: initialBundlerStateInterface = {
  loading: false,
  code: "",
  err: "",
};

export const getBundle = createAsyncThunk(
  "bundler/getBundle",
  async (value: string) => {
    try {
      const output = await bundler(value);
      return output.code;
    } catch (err) {
      return err.message;
    }
  }
);

const bundlerSlice = createSlice({
  name: "bundler",
  initialState: initialBundlerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBundle.pending, (state) => {
      state.loading = true;
      state.err = "";
      state.code = "";
    });
    builder.addCase(
      getBundle.fulfilled,
      (state, action: PayloadAction<bundlerPayloadInterface>) => {
        state.loading = false;
        state.err = action.payload.error;
        state.code = action.payload.code;
      }
    );
  },
});

export const select_bundle = (state: RootState) => state;

export default bundlerSlice.reducer;
