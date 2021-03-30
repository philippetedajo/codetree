import React from "react";

const EditorHeader: React.FC = () => {
  return (
    <header className="flex justify-between  items-center editor-header bg-editorprimary border-b-2 border-editorborder px-9">
      <div className="flex items-center text-gray-200">
        <div className="mr-8">Logo</div>
        <div>
          <small>Octopus</small>
        </div>
      </div>

      <div className="flex">config</div>
    </header>
  );
};

export default EditorHeader;
