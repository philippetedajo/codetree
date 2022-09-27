import React from "react";
import { set_auth_modal } from "../../store/features/editorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { auth_state } from "../../store/features/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(auth_state);
  s;

  return (
    <div className="border mb-4 h-12 flex items-center px-12 justify-between">
      <div>Codetree : Share It ...Fast</div>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(set_auth_modal(true))}
      >
        {user?.isLoggedIn ? (
          <div>
            <div>avatar</div>
            <div>logout</div>
          </div>
        ) : (
          " sign In"
        )}
      </div>
    </div>
  );
};

export default Header;
