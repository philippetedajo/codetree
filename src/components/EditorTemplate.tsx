import React, { useState } from "react";
import * as fill from "../utils/template.json";
import { useDebounce, useDebounceBundler } from "../utils/hooks";
import CodeEditor from "./CodeEditor";
import EditorPreview from "./EditorPreview";
import SplitBox from "./SplitBox";

interface editorTemplateProps {
  template: string;
}

const EditorTemplate: React.FC<editorTemplateProps> = ({ template }) => {
  const [jsInput, setJsInput] = useState<string | undefined>("");
  const [htmlInput, setHmlInput] = useState<string | undefined>("");
  const [cssInput, setCssInput] = useState<string | undefined>("");

  const debouncedHtml = useDebounce(htmlInput, 1000);
  const debouncedCss = useDebounce(cssInput, 1000);
  const debouncedJs = useDebounceBundler(jsInput, 1000);

  let contentBox = template === "vanilla" ? fill.vanilla : fill.react;

  return (
    <main>
      <SplitBox direction="horizontal">
        <SplitBox direction="vertical">
          <CodeEditor
            initialValue={contentBox.html.content}
            language="html"
            onChangeCodeInput={(value) => setHmlInput(value)}
          />
          <CodeEditor
            initialValue={contentBox.css.content}
            language="css"
            onChangeCodeInput={(value) => setCssInput(value)}
          />
          <CodeEditor
            initialValue={contentBox.javascript.content}
            language="javascript"
            onChangeCodeInput={(value) => setJsInput(value)}
          />
        </SplitBox>

        <EditorPreview
          rawJs={debouncedJs && debouncedJs.code}
          rawHtml={debouncedHtml}
          rawCss={debouncedCss}
          message={debouncedJs && debouncedJs.error}
        />
      </SplitBox>
    </main>
  );
};

export default EditorTemplate;
