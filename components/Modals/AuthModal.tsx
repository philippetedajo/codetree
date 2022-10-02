import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hook";
import { getGithubOAuthURL, getGoogleOAuthURL } from "../../utils/getOAuthUrl";
import { nativePopup } from "../../utils/nativePopup";
import { close_modal } from "../../store/features/modalSlice";
import { modalVariant } from "./config";

const AuthModal = () => {
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
      <div className="h-full flex flex-col border shadow-xl sm:rounded-xl overflow-hidden">
        <div className="border h-64"></div>
        <div className="flex h-52 flex-col justify-center items-center gap-7">
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
            className="border"
          >
            connect with google
          </button>

          <button
            onClick={() => {
              nativePopup({
                pageURL: getGithubOAuthURL(),
                pageTitle: "Codetree authentication",
                popupWinWidth: 490,
                popupWinHeight: 600,
              });

              dispatch(close_modal());
            }}
            className="border"
          >
            connect with Github
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthModal;
