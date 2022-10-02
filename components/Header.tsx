import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { auth_state, logout } from "../store/features/authSlice";
import { ModalEnum, open_modal } from "../store/features/modalSlice";
import { Avatar } from "./Avatar";
import { theme_state } from "../store/features/themeSlice";
import { Dropdown } from "./Dropdown";
import { RiLogoutCircleLine } from "react-icons/ri";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(auth_state);
  const { theme } = useAppSelector(theme_state);

  const menu = [
    <div
      key="logout"
      onClick={() => dispatch(logout())}
      className="flex w-full rounded-md p-2 text-gray-200 hover:text-gray-400 cursor-pointer"
    >
      <RiLogoutCircleLine className="mr-2" size={21} />
      <span>Sign out</span>
    </div>,
  ];

  const menuList = menu.map((item, key) => <div key={key}>{item}</div>);

  return (
    <div
      style={{ height: "3rem", background: theme.background }}
      className="flex items-center pl-5 pr-12 justify-between"
    >
      <div>
        <div className="text-2xl font-medium text-gray-200">
          Codetree : Code It ...Fast
        </div>
      </div>
      <div>
        {user?.isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="text-gray-300">{user?.data?.username}</div>

            <Dropdown
              classname="right-0 w-44 px-2 py-2"
              trigger={
                <Avatar
                  size={36}
                  image={user?.data?.avatar}
                  username={user?.data?.username}
                />
              }
            >
              {menuList}
            </Dropdown>
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
