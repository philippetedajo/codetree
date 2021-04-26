import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Bar = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const OnSelect = () => {
    console.log("selected");
  };

  return (
    <div className="bg-black">
      <Dropdown
        options={options}
        onChange={OnSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default Bar;
