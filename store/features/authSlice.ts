import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import {
  GoogleAuthInput,
  GithubAuthInput,
} from "../../graphql/generated/graphql";
import { IronSessionData } from "iron-session";

export type OauthProvider = "google" | "github";
export type OauthInput = GoogleAuthInput | GithubAuthInput;

type InitialStateType = {
  user: IronSessionData["user"] | null;
  errors: any;
  isLoadingLogin: boolean;
  isLoadingLogout: boolean;
};

const initialState = {
  user: {
    isLoggedIn: false,
    data: {
      id: "",
      email: "",
      username: "",
      avatar: undefined,
      bio: undefined,
      website: undefined,
      verifiedAt: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    },
    token: undefined,
    status: false,
  },
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
    with_oauth: (state: InitialStateType) => {
      state.isLoadingLogin = true;
    },
    with_oauth_success: (state: InitialStateType, { payload }) => {
      state.isLoadingLogin = false;
      state.user = payload;
      state.errors = null;
    },
    with_oauth_failure: (state: InitialStateType, { payload }) => {
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
  with_oauth,
  with_oauth_success,
  with_oauth_failure,
  logout_user,
  logout_user_success,
  logout_user_failure,
} = authSlice.actions;

export const auth_state = (state: RootState) => state.auth;

export default authSlice.reducer;

export function withOauth(input: OauthInput, provider: OauthProvider) {
  return async (dispatch: any) => {
    dispatch(with_oauth());

    try {
      const res = await axios.post(`/api/oauth/${provider}`, input);

      if (res.data.status) {
        dispatch(with_oauth_success(res.data));
        return;
      }

      dispatch(with_oauth_failure(res.data.message));
      return res.data;
    } catch (err) {
      dispatch(with_oauth_failure(err.message));
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
