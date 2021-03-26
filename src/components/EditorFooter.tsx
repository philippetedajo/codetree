import React from "react";

interface editorProps {}

const EditorFooter: React.FC<editorProps> = () => {
  return (
    <footer className="editor-footer flex justify-end item-center px-5 text-white text-sm bg-editorprimary border-t-2 border-editorborder">
      Console
    </footer>
  );
};

export default EditorFooter;
