import { useRef, useEffect } from "react";

interface prewiewProps {
  rawJs: string | undefined;
  rawHtml: string | undefined;
  rawCss: string | undefined;
  message: string | undefined;
}

const EditorPreview: React.FC<prewiewProps> = ({
  rawJs,
  rawHtml,
  rawCss,
  message,
}) => {
  const iframe = useRef<any>();

  const htmlFrameContent = `
  <html>
    <head>
      <style>
        ${rawCss}
      </style>
    </head>
    <body>
      <div id="root">
        ${rawHtml}
      </div>
      <script>
        const handleError = (error) => {
          const root = document.getElementById("root");
          root.innerHTML =
            "<div style='color: red'>" + "Runtime error: " + error + "</div>";
          throw error;
        };
  
        window.addEventListener("error", (event) => {
          event.preventDefault();
          handleError(event.error);
        });
  
        window.addEventListener(
          "message",
          (event) => {
            try {
              eval(event.data);
            } catch (error) {
              handleError(error);
            }
          },
          false
        );
      </script>
    </body>
  </html>
  `;

  useEffect(() => {
    iframe.current.srcdoc = htmlFrameContent;

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(rawJs, "*");
    }, 50);
  }, [rawJs, htmlFrameContent]);

  return (
    <div className="preview-wrapper">
      <iframe
        className="preview-iframe "
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
