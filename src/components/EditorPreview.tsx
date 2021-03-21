import { useRef, useEffect } from "react";
import { htmlFrameContent } from "../constants";
import "./styles/code-editor-preview.css";

interface prewiewProps {
  code: string;
}

const EditorPreview: React.FC<prewiewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = htmlFrameContent;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        className="preview-iframe"
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        sandbox="allow-scripts"
        srcDoc={htmlFrameContent}
      />
    </div>
  );
};

export default EditorPreview;
