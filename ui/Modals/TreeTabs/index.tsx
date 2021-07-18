import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  set_editor_type,
} from "../../../store/features/editorSlice";
import { EDITOR_TYPES } from "../../../_types/editorTypes";
import WebTrees from "./WebTrees";
import PythonTrees from "./PythonTrees";

export const TreeTabs = () => {
  const dispatch = useAppDispatch();

  const { editorType } = useAppSelector(editor_state);

  let trees;
  switch (editorType) {
    case EDITOR_TYPES.WebEditor:
      trees = <WebTrees />;
      break;
    case EDITOR_TYPES.PythonEditor:
      trees = <PythonTrees />;
  }

  console.log(editorType);

  return (
    <div>
      <h1 className="text-2xl pb-3 border-b border-tree-border">
        Select your tree
      </h1>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div onClick={() => dispatch(set_editor_type(EDITOR_TYPES.WebEditor))}>
          Web
        </div>
        <div
          onClick={() => dispatch(set_editor_type(EDITOR_TYPES.PythonEditor))}
        >
          Python
        </div>
      </div>
      {trees}
    </div>
  );
};
