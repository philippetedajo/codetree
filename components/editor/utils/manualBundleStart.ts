import { update_sync_code } from "../../../store/features/editorSlice";

export const manualBundleStart = async (value: any, dispatch) => {
  dispatch(
    update_sync_code({
      code: value.languages.js.code.data,
      type: "js",
      error: "",
    })
  );
};
