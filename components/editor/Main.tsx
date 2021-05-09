import React from "react";
import Split from "react-split";
import dynamic from "next/dynamic";
import Tabs, { TabPane } from "rc-tabs";
import { JsPanel, HtmlPanel, CssPanel } from "./Pans";
import { useAppDispatch } from "../../store/hook";
import { toggle_focus_mode } from "../../store/features/editorSlice";

const Main = () => {
  const PreviewWithNoSSR = dynamic(() => import("./Preview"), {
    ssr: false,
  });

  const dispatch = useAppDispatch();

  const handleToggleFocusMode = () => {
    dispatch(toggle_focus_mode());
  };

  return (
    <>
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={true}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className="flex flex-shrink flex-grow"
      >
        <div>
          <Tabs
            tabPosition={"top"}
            tabBarGutter={16}
            className="programming-language-tabs"
            defaultActiveKey="js"
          >
            <TabPane tab={<div className="text-base">Js </div>} key="js">
              <JsPanel />
            </TabPane>
            <TabPane tab={<div className="text-base">Html </div>} key="html">
              <HtmlPanel />
            </TabPane>
            <TabPane tab={<div className="text-base">Css</div>} key="css">
              <CssPanel />
            </TabPane>
          </Tabs>
        </div>
        {/* */}
        <div>
          <button onClick={handleToggleFocusMode}>toggle Focus mode</button>
          <PreviewWithNoSSR />
        </div>
      </Split>
    </>
  );
};

export default Main;
