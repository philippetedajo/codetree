import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as esbuild from "esbuild-wasm";
import { unpkgFetchPlugin, unpkgPathPlugin } from "../../esbuild/plugins";

type InitialStateType = {
  isInitializing: boolean;
  esbuildStatus: { isReady: boolean; error: string };
  isCompiling: boolean;
  output: { code: string; error: string };
};

const initialState = {
  isInitializing: false,
  esbuildStatus: { isReady: false, error: "" },
  isCompiling: false,
  output: { code: "", error: "" },
};

export const compilerSlice = createSlice({
  name: "compiler",
  initialState: initialState,
  reducers: {
    init_esbuild: (state: InitialStateType) => {
      state.isInitializing = true;
    },
    init_esbuild_success: (state: InitialStateType) => {
      state.esbuildStatus.isReady = true;
      state.esbuildStatus.error = "";
      state.isInitializing = false;
    },
    init_esbuild_failure: (state: InitialStateType, { payload }) => {
      state.esbuildStatus.isReady = false;
      state.esbuildStatus.error = payload;
      state.isInitializing = false;
    },
    compiled: (state: InitialStateType) => {
      state.isCompiling = true;
    },
    compiled_success: (state: InitialStateType, { payload }) => {
      state.output.code = payload;
      state.output.error = "";
      state.isCompiling = false;
    },
    compiled_failure: (state: InitialStateType, { payload }) => {
      state.output.code = "";
      state.output.error = payload;
      state.isCompiling = false;
    },
  },
});

export const {
  compiled,
  compiled_success,
  compiled_failure,
  init_esbuild,
  init_esbuild_success,
  init_esbuild_failure,
} = compilerSlice.actions;

export const compiler_state = (state: RootState) => state.compiler;

export default compilerSlice.reducer;

// Asynchronous thunk action

export function initEsbuild() {
  return async (dispatch: any) => {
    dispatch(init_esbuild());

    await esbuild
      .initialize({
        worker: true,
        wasmURL: "https://unpkg.com/esbuild-wasm@0.12.12/esbuild.wasm",
      })
      .then(() => {
        dispatch(init_esbuild_success());
      })
      .catch((error) => dispatch(init_esbuild_failure(error.message)));
  };
}

export function getCompileCode(rawCode: string, entryPoint: string) {
  return async (dispatch: any) => {
    dispatch(compiled());

    try {
      const result = await esbuild.build({
        entryPoints: [`${entryPoint}`],
        bundle: true,
        write: false,
        plugins: [
          unpkgPathPlugin(entryPoint),
          unpkgFetchPlugin(rawCode, entryPoint),
        ],
        define: {
          global: "window",
          "process.env.NODE_ENV": '"production"',
        },
      });

      dispatch(compiled_success(result.outputFiles[0].text));
    } catch (error) {
      dispatch(compiled_failure(error.message));
    }
  };
}
