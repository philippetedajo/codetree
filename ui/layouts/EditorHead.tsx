import React from "react";
import { HiPlus, HiCog } from "react-icons/hi";

import { useAppDispatch } from "../../store/hook";
import {
  set_settings_modal,
  set_template_modal,
} from "../../store/features/editorSlice";

export const EditorHead = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="flex justify-between items-center h-12 z-50 bg-tree-hard text-gray-200 border-b-2 px-5 border-black">
      <div>
        <div className="text-2xl text-gray-300">Codetree</div>
      </div>
      <div className="flex items-center">
        <HiPlus
          onClick={() => dispatch(set_template_modal(true))}
          size={26}
          className="text-gray-500 cursor-pointer hover:text-white mr-4"
          aria-hidden="true"
        />

        <HiCog
          onClick={() => dispatch(set_settings_modal(true))}
          size={23}
          className="text-gray-500 cursor-pointer hover:text-white"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
