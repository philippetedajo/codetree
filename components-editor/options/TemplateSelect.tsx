import Image from "next/image";
import {
  update_async_code_finished,
  update_async_code_start,
  update_template,
} from "../../store/features/editorSlice";
import { useAppDispatch } from "../../store/hook";
import { _empty, _react, _p5 } from "../templates";
import bundler from "../../bundler";

const TemplateSelect = ({ setShowModal }) => {
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

  const onSelect = (event) => {
    console.log(event.target);

    switch (event.target.name) {
      case "vanilla":
        manualBundleStart(_empty);
        break;
      case "react":
        manualBundleStart(_react);
        break;
      case "p5":
        manualBundleStart(_p5);
        break;
    }
    // setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold pb-3 border-b border-tree-border">
        Create your tree
      </h1>
      <div className="pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button name="vanilla" onClick={onSelect}>
            <div className="flex pointer-events-none">
              <Image src="/icons/vanilla.svg" width={40} height={40} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>Vanilla</div>
                <div>description</div>
              </div>
            </div>
          </button>

          <button name="react" onClick={onSelect}>
            <div className="flex pointer-events-none">
              <Image src="/icons/reactjs.svg" width={40} height={40} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>React</div>
                <div>description</div>
              </div>
            </div>
          </button>

          <button name="p5" onClick={onSelect}>
            <div className="flex pointer-events-none">
              <Image src="/icons/p5-dot-js.svg" width={40} height={40} />
              <div className="flex flex-col items-start justify-start pl-4">
                <div>P5</div>
                <div>description</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelect;
