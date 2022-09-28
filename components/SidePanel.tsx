import React, { useEffect, useRef } from "react";
import * as htmlToImage from "html-to-image";
import { HiCog, HiPlus } from "react-icons/hi";
import { useAppDispatch } from "../store/hook";
import { MODAL_TYPE, open_modal } from "../store/features/modalSlice";

const SidePanel = () => {
  const dispatch = useAppDispatch();

  const node = useRef<HTMLElement | null>(null);

  useEffect(() => {
    node.current = document.getElementById("super-iframe");
  }, [node.current]);

  const onSave = () => {
    if (node.current) {
      htmlToImage
        .toBlob(node.current)
        .then(function (blob) {
          console.log(blob);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  return (
    <div className="border h-full w-2/12">
      <header className="flex justify-between items-center h-10 z-50 bg-tree-hard text-gray-200 border-b-2 px-5 border-black">
        <div>
          <div className="text-xl">Codetree</div>
        </div>
        <div className="flex items-center">
          <HiPlus
            onClick={() => dispatch(open_modal(MODAL_TYPE.TEMPLATE))}
            size={26}
            className="text-gray-500 cursor-pointer hover:text-white mr-4"
            aria-hidden="true"
          />

          <HiCog
            onClick={() => dispatch(open_modal(MODAL_TYPE.SETTINGS))}
            size={23}
            className="text-gray-500 cursor-pointer hover:text-white"
            aria-hidden="true"
          />
        </div>
      </header>

      <button onClick={onSave}>Save</button>

      <div className="grid grid-cols-2 gap-3">
        <div className="border h-24">+</div>
        <div className="border h-24" />
        <div className="border h-24" />
        <div className="border h-24" />
      </div>
    </div>
  );
};

export default SidePanel;
