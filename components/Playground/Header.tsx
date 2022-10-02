import React from "react";
import { RiAddFill, RiSettings3Fill } from "react-icons/ri";
import { useAppDispatch } from "../../store/hook";
import { ModalEnum, open_modal } from "../../store/features/modalSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ height: "3rem" }} className="flex justify-end px-12">
      <div className="flex gap-4 items-center ">
        <RiAddFill
          size={24}
          className="cursor-pointer text-gray-400"
          onClick={() => dispatch(open_modal(ModalEnum.TEMPLATE))}
        />
        <RiSettings3Fill
          size={20}
          className="cursor-pointer text-gray-400"
          onClick={() => dispatch(open_modal(ModalEnum.SETTINGS))}
        />
      </div>
    </div>
  );
};

export default Header;
