import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify-icons/logos/javascript";
import reactIcon from "@iconify-icons/logos/react";

interface editorHeaderProps {
  template: "javascript" | "react" | unknown;
}

const EditorHeader: React.FC<editorHeaderProps> = ({ template }) => {
  let iconsTemp;

  switch (template) {
    case "javascript":
      iconsTemp = javascriptIcon;
      break;
    case "react":
      iconsTemp = reactIcon;
      break;
    default:
      iconsTemp = javascriptIcon;
      break;
  }

  return (
    <header className="flex justify-between  items-center editor-header bg-editorprimary border-b-2 border-editorborder px-9">
      <div className="flex items-center text-gray-200">
        <div className="mr-8">Logo</div>
        <div>
          <small>Octopus</small>
        </div>
      </div>

      <div className="flex">
        <Icon icon={iconsTemp} width={20} className="mr-3" />
      </div>
    </header>
  );
};

export default EditorHeader;
