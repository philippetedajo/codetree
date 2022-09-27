import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { GoogleAuthInput } from "../../graphql/generated/graphql";
import { IronSessionData } from "iron-session";

type InitialStateType = {
  user: IronSessionData["user"] | null;
  errors: any;
  isLoadingLogin: boolean;
  isLoadingLogout: boolean;
};

const initialState = {
  user: null,
  errors: null,
  isLoadingLogin: false,
  isLoadingLogout: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    set_initial_user: (state: InitialStateType, { payload }) => {
      state.user = payload;
      state.errors = null;
    },
    with_google: (state: InitialStateType) => {
      state.isLoadingLogin = true;
    },
    with_google_success: (state: InitialStateType, { payload }) => {
      state.isLoadingLogin = false;
      state.user = payload;
      state.errors = null;
    },
    with_google_failure: (state: InitialStateType, { payload }) => {
      state.isLoadingLogin = false;
      state.user = null;
      state.errors = payload;
    },
    logout_user: (state: InitialStateType) => {
      state.isLoadingLogout = true;
    },
    logout_user_success: (state: InitialStateType) => {
      state.isLoadingLogout = false;
      state.user = null;
      state.errors = null;
    },
    logout_user_failure: (state: InitialStateType, { payload }) => {
      state.isLoadingLogout = false;
      state.errors = payload;
    },
  },
});

export const {
  set_initial_user,
  with_google,
  with_google_success,
  with_google_failure,
  logout_user,
  logout_user_success,
  logout_user_failure,
} = authSlice.actions;

export const auth_state = (state: RootState) => state.auth;

export default authSlice.reducer;

export function withGoogle(input: GoogleAuthInput) {
  return async (dispatch: any) => {
    dispatch(with_google());

    try {
      const res = await axios.post("/api/oauth/google", input);

      if (res.data.status) {
        dispatch(with_google_success(res.data));
        return;
      }

      dispatch(with_google_failure(res.data.message));
      return res.data;
    } catch (err) {
      dispatch(with_google_failure(err.message));
    }
  };
}

export function logout() {
  return async (dispatch: any) => {
    dispatch(logout_user());

    try {
      axios.post("/api/logout").then(() => {
        dispatch(logout_user_success());
      });
    } catch (err) {
      dispatch(logout_user_failure(err.message));
    }
  };
}
