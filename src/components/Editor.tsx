import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import bracketsCurly from "@iconify-icons/uil/brackets-curly";
import codeTags from "@iconify-icons/mdi/code-tags";
import fileTypeJs from "@iconify-icons/vscode-icons/file-type-js";
import template from "../utils/template";
import { useDebounce } from "../utils/hooks";
import CodeEditor from "./CodeEditor";
import EditorPreview from "./EditorPreview";
import SplitBox from "./SplitBox";

const Editor: React.FC = () => {
  const [jsInput, setJsInput] = useState("");
  const [htmlInput, setHmlInput] = useState("");
  const [cssInput, setCssInput] = useState("");

  const debouncedHtml = useDebounce(htmlInput, 1000, false);
  const debouncedCss = useDebounce(cssInput, 1000, false);
  const debouncedJs = useDebounce(jsInput, 1000, true);

  let _selected = { bg: "#1B252D", color: "#E5E7EB" };

  return (
    <main>
      <SplitBox direction="horizontal">
        <Tabs>
          <TabList
            _selected={_selected}
            background="#171E25"
            color="#6B7280"
            pl={9}
          >
            <Tab
              _selected={_selected}
              className="font-medium"
              fontSize=".92rem"
            >
              <Icon icon={fileTypeJs} width={20} className="mr-3" />
              Javascript
            </Tab>
            <Tab
              _selected={_selected}
              className="font-medium"
              fontSize=".92rem"
            >
              <Icon
                icon={codeTags}
                color="#3B82F6"
                width={20}
                className="mr-3"
              />
              Html
            </Tab>
            <Tab
              _selected={_selected}
              className="font-medium"
              fontSize=".92rem"
            >
              <Icon
                icon={bracketsCurly}
                width={16}
                className="mr-3 "
                color="#EF4444"
              />
              Css
            </Tab>
          </TabList>

          <TabPanels className="h-full pt-5">
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={template.javascript}
                language="javascript"
                onChangeCodeInput={(value: string) => setJsInput(value)}
              />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={template.html}
                language="html"
                onChangeCodeInput={(value: string) => setHmlInput(value)}
              />
            </TabPanel>
            <TabPanel p={0} className="h-full">
              <CodeEditor
                initialValue={template.css}
                language="css"
                onChangeCodeInput={(value: string) => setCssInput(value)}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <EditorPreview
          rawJs={debouncedJs && debouncedJs.code}
          rawHtml={debouncedHtml && debouncedHtml.code}
          rawCss={debouncedCss && debouncedCss.code}
          message={debouncedJs && debouncedJs.error}
          showConsole={true}
        />
      </SplitBox>
    </main>
  );
};

export default Editor;
