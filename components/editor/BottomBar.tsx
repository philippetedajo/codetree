import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { editor_state, toggle_console } from "../../store/features/editorSlice";

const BottomBar: React.FC = () => {
  const {
    codeEditor: { languages },
    hasConsoleLogs,
    isSavingEditor,
    isTranspiling,
  } = useAppSelector(editor_state);

  const dispatch = useAppDispatch();

  const handleToggleConsole = () => {
    dispatch(toggle_console());
  };

  return (
    <footer
      className={`flex flex-shrink-0 h-6 justify-between bg-tree-soft text-white item-center px-5 text-sm z-50`}
    >
      <div className="flex items-center">
        <a
          href="https://github.com/philippetedajo/Codetree"
          target="_blank"
          rel="noreferrer"
          className="mr-3 hover:text-green-500"
        >
          Support us ❤️.️
        </a>

        {isTranspiling ? (
          <div className="flex items-center ">
            <div className="mr-3"> Transpiling code ...</div>
            <div className="loader-spinner ease-linear rounded-full border-8 border-t-8 border-gray-300 h-4 w-4" />
          </div>
        ) : (
          ""
        )}
        {isSavingEditor ? (
          <div className="flex items-center ">
            <div className="mr-3"> Saving your tree ...</div>
            <div className="loader-spinner ease-linear rounded-full border-8 border-t-8 border-gray-300 h-4 w-4" />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-center items-center">
        <span
          className="cursor-pointer mr-4 hover:text-green-500"
          onClick={handleToggleConsole}
        >
          Console
        </span>

        {hasConsoleLogs ? (
          <>
            <div className="absolute right-5 p-1 bg-green-400 rounded-full animate-ping" />
            <div className="absolute right-5 p-1 bg-green-400  border-white rounded-full" />
          </>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
};

export default BottomBar;
