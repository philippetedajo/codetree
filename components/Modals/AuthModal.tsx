import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hook";
import getGoogleOAuthURL from "../../utils/getGoogleOAuthUrl";
import { nativePopup } from "../../utils/nativePopup";
import { close_modal } from "../../store/features/modalSlice";
import { modalVariant } from "./config";

export const AuthModal = () => {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className="sm:mt-10 mx-auto h-full sm:h-auto sm:w-8/12 lg:w-6/12 xl:w-4/12"
      variants={modalVariant}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 0.4 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-full sm:h-96 flex px-4 py-6 sm:px-8 flex-col border shadow-xl sm:rounded-xl">
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              nativePopup({
                pageURL: getGoogleOAuthURL(),
                pageTitle: "Codetree authentication",
                popupWinWidth: 490,
                popupWinHeight: 600,
              });

              dispatch(close_modal());
            }}
            className="mt-10"
          >
            connect with google
          </button>
        </div>
      </div>
    </motion.div>
  );
};
