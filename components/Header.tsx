import React from "react";
import { set_auth_modal } from "../store/features/editorSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { auth_state, logout } from "../store/features/authSlice";
import { Avatar } from "./Avatar";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(auth_state);

  return (
    <div className="border mb-4 h-12 flex items-center px-12 justify-between">
      <div>Codetree : Share It ...Fast</div>
      <div>
        {/*  TODO: INFER TYPE*/}
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
            onClick={() => dispatch(set_auth_modal(true))}
          >
            sign In
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
