import Image from "next/image";
import { useAppDispatch } from "../../../store/hook";
import { set_initial_Monaco_Value } from "../../../store/features/editorSlice";
import { _vanilla, _react, _p5 } from "../templates";

import { manualBundleStart } from "../utils/manualBundleStart";
import React from "react";

const TemplateSelect = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const onSelect = (event) => {
    switch (event.target.name) {
      case "vanilla":
        manualBundleStart(_vanilla, dispatch);
        dispatch(
          set_initial_Monaco_Value({
            js: _vanilla.languages.js.code.data,
            html: _vanilla.languages.html.code.data,
            css: _vanilla.languages.css.code.data,
          })
        );
        break;
      case "react":
        manualBundleStart(_react, dispatch);
        dispatch(
          set_initial_Monaco_Value({
            js: _react.languages.js.code.data,
            html: _react.languages.html.code.data,
            css: _react.languages.css.code.data,
          })
        );
        break;
      case "p5":
        manualBundleStart(_p5, dispatch);
        dispatch(
          set_initial_Monaco_Value({
            js: _p5.languages.js.code.data,
            html: _p5.languages.html.code.data,
            css: _p5.languages.css.code.data,
          })
        );
        break;
    }
    closeModal();
  };

  return (
    <div>
      <h1 className="text-2xl pb-3 border-b border-tree-border">
        Select your tree
      </h1>
      <div className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <button
            name="vanilla"
            onClick={onSelect}
            className="hover:bg-tree-soft p-2"
          >
            <div className="flex pointer-events-none">
              <Image src="/icons/vanilla.svg" width={35} height={35} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>Vanilla</div>
                <div className="text-xs text-gray-400">Empty Js playground</div>
              </div>
            </div>
          </button>

          <button
            name="react"
            onClick={onSelect}
            className="hover:bg-tree-soft p-2"
          >
            <div className="flex pointer-events-none">
              <Image src="/icons/reactjs.svg" width={35} height={35} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>React</div>
                <div className="text-xs text-gray-400">ReactJs playground</div>
              </div>
            </div>
          </button>

          <button
            name="p5"
            onClick={onSelect}
            className="hover:bg-tree-soft p-2"
          >
            <div className="flex pointer-events-none">
              <Image src="/icons/p5-dot-js.svg" width={35} height={35} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>P5</div>
                <div className="text-xs justify-start text-gray-400">
                  Processing for today’s web
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelect;
