import { update_sync_code } from "../../../store/features/editorSlice";

export const manualBundleStart = async (value: any, dispatch) => {
  await dispatch(
    update_sync_code({
      code: value.languages.js.code.data,
      type: "js",
      error: "",
    })
  );
  await dispatch(
    update_sync_code({
      code: value.languages.css.code.data,
      type: "css",
      error: "",
    })
  );
  await dispatch(
    update_sync_code({
      code: value.languages.html.code.data,
      type: "html",
      error: "",
    })
  );
};
