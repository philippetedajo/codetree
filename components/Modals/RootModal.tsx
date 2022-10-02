import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  modal_state,
  close_modal,
  ModalEnum,
} from "../../store/features/modalSlice";

import AuthModal from "./AuthModal";
import TemplateModal from "./TemplateModal";
import SettingsModal from "./SettingsModal";

export const RootModal = () => {
  const { type, visible } = useAppSelector(modal_state);
  const dispatch = useAppDispatch();

  const renderModal = (type: ModalEnum) => {
    switch (type) {
      case ModalEnum.AUTH:
        return <AuthModal />;

      case ModalEnum.TEMPLATE:
        return <TemplateModal />;

      case ModalEnum.SETTINGS:
        return <SettingsModal />;

      case ModalEnum.IDLE:
        return <div />;
    }
  };

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => null}>
      {visible && (
        <motion.div
          className="backdrop"
          onClick={() => dispatch(close_modal())}
        >
          {renderModal(type)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
