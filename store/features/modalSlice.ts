import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum ModalEnum {
  IDLE = "IDLE",
  AUTH = "AUTH",
}

type InitialStateType = {
  type: ModalEnum;
  visible: boolean;
};

const initialState = {
  type: ModalEnum.IDLE,
  visible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    open_modal: (state: InitialStateType, action: PayloadAction<ModalEnum>) => {
      state.type = action.payload;
      state.visible = true;
    },
    close_modal: (state: InitialStateType) => {
      state.type = ModalEnum.IDLE;
      state.visible = false;
    },
  },
});

export const { open_modal, close_modal } = modalSlice.actions;

export const modal_state = (state: RootState) => state.modal;

export default modalSlice.reducer;
