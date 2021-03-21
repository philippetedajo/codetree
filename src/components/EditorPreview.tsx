import { useRef, useEffect } from "react";
import { htmlFrameContent } from "../constants";

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
    <iframe
      ref={iframe}
      title="previewWindow"
      sandbox="allow-scripts"
      srcDoc={htmlFrameContent}
    />
  );
};

export default EditorPreview;
