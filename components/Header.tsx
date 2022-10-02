import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { auth_state, logout } from "../store/features/authSlice";
import { ModalEnum, open_modal } from "../store/features/modalSlice";
import { Avatar } from "./Avatar";
import { theme_state } from "../store/features/themeSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(auth_state);
  const { theme } = useAppSelector(theme_state);

  return (
    <div
      style={{ height: "3rem", background: theme.background }}
      className="flex items-center px-12 justify-between"
    >
      <div>Codetree : Code It ...Fast</div>
      <div>
        {user?.isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="cursor-pointer" onClick={() => dispatch(logout())}>
              logout
            </div>
            <div>
              <Avatar
                image={user?.data?.avatar}
                username={user?.data?.username}
              />
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => dispatch(open_modal(ModalEnum.AUTH))}
          >
            sign In
          </div>
        )}
      </div>
    </div>
  );
};
