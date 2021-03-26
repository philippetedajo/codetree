import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import bracketsCurly from "@iconify-icons/uil/brackets-curly";
import codeTags from "@iconify-icons/mdi/code-tags";
import fileTypeJs from "@iconify-icons/vscode-icons/file-type-js";
import * as fill from "../utils/template.json";
import { useDebounce, useDebounceBundler } from "../utils/hooks";
import CodeEditor from "./CodeEditor";
import EditorPreview from "./EditorPreview";
import SplitBox from "./SplitBox";

interface editorTemplateProps {
  template: "javascript" |  "react" |  "vue"
}

const EditorTemplate: React.FC<editorTemplateProps> = ({ template }) => {
  const [jsInput, setJsInput] = useState<string | undefined>("");
  const [htmlInput, setHmlInput] = useState<string | undefined>("");
  const [cssInput, setCssInput] = useState<string | undefined>("");

  const debouncedHtml = useDebounce(htmlInput, 1000);
  const debouncedCss = useDebounce(cssInput, 1000);
  const debouncedJs = useDebounceBundler(jsInput, 1000);

  let contentBox = template === "javascript" ? fill.javascript : fill.react;
  let _selected = { color: "white", bg: "#1B252D" };

  return (
    <main>
      <SplitBox direction="horizontal">
        <Tabs>
          <TabList background="#171E25" color="#fff" pl={9}>
            <Tab _selected={_selected}>
              <Icon icon={fileTypeJs} width={20} className="mr-3" />
              Javascript
            </Tab>
            <Tab _selected={_selected}>
              <Icon
                icon={codeTags}
                color="#3B82F6"
                width={20}
                className="mr-3"
              />
              Html
            </Tab>
            <Tab _selected={_selected}>
              <Icon
                icon={bracketsCurly}
                width={16}
                className="mr-3"
                color="#EF4444"
              />
              Css
            </Tab>
          </TabList>

          <TabPanels className="h-full pt-5">
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={contentBox.javascript.content}
                language="javascript"
                onChangeCodeInput={(value) => setJsInput(value)}
              />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={contentBox.html.content}
                language="html"
                onChangeCodeInput={(value) => setHmlInput(value)}
              />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={contentBox.css.content}
                language="css"
                onChangeCodeInput={(value) => setCssInput(value)}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <EditorPreview
          rawJs={debouncedJs && debouncedJs.code}
          rawHtml={debouncedHtml}
          rawCss={debouncedCss}
          message={debouncedJs && debouncedJs.error}
          showConsole={true}
        />
      </SplitBox>
    </main>
  );
};

export default EditorTemplate;
