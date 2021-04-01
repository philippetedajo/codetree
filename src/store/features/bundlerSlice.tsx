import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import bundler from "../../bundler";

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
    } catch (err) {
      return err;
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
        state.err = "";
        state.code = action.payload.code;
      }
    );
    // builder.addCase(
    //   getBundle.rejected,
    //   (state, action: PayloadAction<bundlerPayloadInterface>) => {
    //     state.loading = false;
    //     state.err = "";
    //     state.code = "";
    //   }
    // );
  },
});

export default bundlerSlice.reducer;
