import { useAppDispatch } from "../store/hook";
import {
  set_monaco_input_value,
  set_editor_value,
  clear_logs,
} from "../store/features/editorSlice";
import { close_modal } from "../store/features/modalSlice";
import { EditorValueInterface } from "../_types/editorTypes";

export const useTree = () => {
  const dispatch = useAppDispatch();

  const setTree = (data: EditorValueInterface) => {
    dispatch(clear_logs());
    dispatch(set_monaco_input_value(data));
    dispatch(set_editor_value(data));
    dispatch(close_modal());
  };

  return { setTree };
};
