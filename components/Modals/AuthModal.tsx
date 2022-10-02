import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hook";
import { getGithubOAuthURL, getGoogleOAuthURL } from "../../utils/getOAuthUrl";
import { nativePopup } from "../../utils/nativePopup";
import { close_modal } from "../../store/features/modalSlice";
import { modalVariant } from "./config";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";

const AuthModal = () => {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className="sm:mt-10 mx-auto h-full sm:h-auto sm:w-8/12 lg:w-6/12 xl:w-4/12"
      variants={modalVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeOut", duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-full flex flex-col shadow-xl sm:rounded-xl overflow-hidden">
        <div
          className="h-64 w-full"
          style={{
            backgroundImage: `url(https://cdn.dribbble.com/userupload/3396431/file/original-d865684d8f3afbc99fcab7ab38f9ee9e.png?compress=1&resize=1504x1128)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="flex h-52 flex-col justify-center items-center gap-7 glassmorphism">
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
            className="px-5 border border-gray-400 flex gap-x-5 items-center justify-center w-80 h-12 rounded-xl text-gray-300"
          >
            <RiGoogleFill size={24} />
            <div>Sign in with google</div>
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
            className="px-5 border border-gray-400  flex gap-x-5 items-center justify-center w-80 h-12 rounded-xl text-gray-300"
          >
            <RiGithubFill size={24} />
            <div>Sign in with github</div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthModal;
