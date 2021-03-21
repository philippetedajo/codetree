import React from "react";

interface editorProps {
  isBundling: boolean;
}

const EditorFooter: React.FC<editorProps> = ({ isBundling }) => {
  return (
    <footer className="editor-footer">
      <div> {isBundling ? "Bundling..." : ""} </div>
    </footer>
  );
};

export default EditorFooter;
