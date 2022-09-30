import React from "react";
import { RiBook3Line, RiSettings3Line, RiTerminalLine } from "react-icons/ri";

import { set_panel, PanelEnum } from "../store/features/editorSlice";
import { useAppDispatch } from "../store/hook";

export const SideBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="glassmorphism rounded-bl-xl rounded-tl-xl w-14 flex flex-col items-center gap-3 pt-10">
      <RiTerminalLine
        onClick={() => dispatch(set_panel(PanelEnum.EDITOR_INPUT))}
        size={24}
        className="cursor-pointer"
        aria-hidden="true"
      />
      <RiBook3Line
        onClick={() => dispatch(set_panel(PanelEnum.EDITOR_TEMPLATE))}
        size={24}
        className="cursor-pointer"
        aria-hidden="true"
      />
      <RiSettings3Line
        onClick={() => dispatch(set_panel(PanelEnum.EDITOR_SETTINGS))}
        size={24}
        className="cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
};
