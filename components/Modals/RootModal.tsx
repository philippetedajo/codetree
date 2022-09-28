import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  modal_state,
  close_modal,
  MODAL_TYPE,
} from "../../store/features/modalSlice";
import { AuthModal } from "./AuthModal";
import { TemplateModal } from "./TemplateModal";
import { SettingsModal } from "./SettingsModal";

import { motion, AnimatePresence } from "framer-motion";

export const RootModal = () => {
  const { type, visible } = useAppSelector(modal_state);
  const dispatch = useAppDispatch();

  const renderModal = (type: MODAL_TYPE) => {
    switch (type) {
      case MODAL_TYPE.AUTH:
        return <AuthModal />;

      case MODAL_TYPE.TEMPLATE:
        return <TemplateModal />;

      case MODAL_TYPE.SETTINGS:
        return <SettingsModal />;

      case MODAL_TYPE.IDLE:
        return <div />;
    }
  };

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => null}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="backdrop"
          onClick={() => dispatch(close_modal())}
        >
          {renderModal(type)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
