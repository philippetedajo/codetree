import { useRef, useEffect } from "react";
import "./styles/code-editor-preview.css";

interface prewiewProps {
  code: string;
  message: string;
}

export const htmlFrameContent = `
<html>
  <head>
    <style>
      body {
        background-color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const handleError =(error)=>{
        const root = document.getElementById("root");
        root.innerHTML = "<div style='color: red'>" + "Runtime error: " + error + "</div>";
        throw error;
      }

      window.addEventListener("error", (event) => {
        event.preventDefault()
        handleError(event.error)
      });      

      window.addEventListener(
        "message",
        (event) => {
          try {
            eval(event.data);
          } catch (error) {
            handleError(error)
          }
        },
        false
      );
    </script>
  </body>
</html>
`;

const EditorPreview: React.FC<prewiewProps> = ({ code, message }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = htmlFrameContent;

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  console.log(message);

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

      {message && <div className="error-message">{message}</div>}
    </div>
  );
};

export default EditorPreview;
