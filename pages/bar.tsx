import Dropdown from "react-dropdown";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const Bar = () => {
  const options = ["Vanilla", "React"];
  const defaultOption = options[0];
  const OnSelect = (data) => {
    console.log(data);
  };

  return (
    <div className="p-20">
      <Dropdown
        className="cursor-pointer w-40"
        controlClassName="border-2 flex items-center justify-between px-3 h-9 rounded"
        menuClassName="mt-2 px-3 rounded bg-tree-hard"
        arrowClosed={<BsCaretDownFill size={25} />}
        arrowOpen={<BsCaretUpFill size={25} />}
        options={options}
        onChange={OnSelect}
        value={defaultOption}
        placeholder="Select an option"
        placeholderClassName="border-3 border-red-500"
      />
    </div>
  );
};

export default Bar;
