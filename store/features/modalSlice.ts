import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../store";

export enum MODAL_TYPE {
  IDLE = "IDLE",
  AUTH = "AUTH",
  TEMPLATE = "TEMPLATE",
  SETTINGS = "SETTINGS",
}

type InitialStateType = {
  type: MODAL_TYPE;
  visible: boolean;
};

const initialState = {
  type: MODAL_TYPE.IDLE,
  visible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    open_modal: (
      state: InitialStateType,
      action: PayloadAction<MODAL_TYPE>
    ) => {
      state.type = action.payload;
      state.visible = true;
    },
    close_modal: (state: InitialStateType) => {
      state.type = MODAL_TYPE.IDLE;
      state.visible = false;
    },
  },
});

export const { open_modal, close_modal } = modalSlice.actions;

export const modal_state = (state: RootState) => state.modal;

export default modalSlice.reducer;
