import { Icon } from "@iconify/react";
import typescriptIcon from "@iconify-icons/logos/typescript-icon";
import javascriptIcon from "@iconify-icons/logos/javascript";
import reactIcon from "@iconify-icons/logos/react";
import vueIcon from "@iconify-icons/logos/vue";

const EditorHeader = () => {
  return (
    <header className="flex justify-between items-center editor-header bg-editorprimary border-b-2 border-editorborder px-9">
      <div className="flex items-center text-white">
        <div className="mr-8">Logo</div>
        <div>
          <small>Octopus</small>
        </div>
      </div>

      <div className="flex">
        <Icon icon={typescriptIcon} width={20} className="mr-3" />
        <Icon icon={javascriptIcon} width={20} className="mr-3" />
        <Icon icon={reactIcon} width={20} className="mr-3" />
        <Icon icon={vueIcon} width={20} />
      </div>
    </header>
  );
};

export default EditorHeader;
