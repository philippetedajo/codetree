import {
  update_async_code_finished,
  update_async_code_start,
  update_template,
} from "../../../store/features/editorSlice";
import bundler from "../../../bundler";

export const manualBundleStart = async (value: any, dispatch) => {
  dispatch(update_async_code_start({ code: "", type: "js", error: "" }));
  const output = await bundler(value.languages.js.code.data);
  dispatch(
    update_async_code_finished({
      code: output.code,
      type: "js",
      error: output.error,
    })
  );
};
