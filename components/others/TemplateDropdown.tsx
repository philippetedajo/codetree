import {
  update_async_code_finished,
  update_async_code_start,
  update_template,
} from "../../store/features/editorSlice";
import { useAppDispatch } from "../../store/hook";
import { _empty, _react } from "../templates";
import bundler from "../../bundler";
import Dropdown from "react-dropdown";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const TemplateDropDown = () => {
  const dispatch = useAppDispatch();

  const manualBundleStart = async (value: any) => {
    dispatch(update_template(value));

    dispatch(update_async_code_start({ code: "", type: "js", error: "" }));
    const output = await bundler(value.js.code.data);
    dispatch(
      update_async_code_finished({
        code: output.code,
        type: "js",
        error: output.error,
      })
    );
  };

  const options = ["Vanilla", "React"];
  const defaultOption = options[0];

  const OnSelect = (data) => {
    switch (data.value) {
      case "Vanilla":
        manualBundleStart(_empty);
        break;
      case "React":
        manualBundleStart(_react);
        break;
    }
    console.log(data.value);
  };

  return (
    <Dropdown
      className="cursor-pointer w-36 pt-1.5 z-50"
      controlClassName="bg-tree-low flex items-center justify-between px-3 h-9 text-sm rounded"
      menuClassName="mt-3 border px-3 rounded bg-gray-100 text-tree-hard shadow-lg text-sm"
      arrowClosed={<BsCaretDownFill size={25} />}
      arrowOpen={<BsCaretUpFill size={25} />}
      options={options}
      onChange={OnSelect}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default TemplateDropDown;
