import React from "react";
import dynamic from "next/dynamic";
import Split from "react-split";
import Tabs, { TabPane } from "rc-tabs";
import { JsPanel, HtmlPanel, CssPanel } from "./Pans";
import Modal from "./Modal";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

const Tree = () => {
  const Preview = dynamic(() => import("./Preview"), {
    ssr: false,
  });

  return (
    <div>
      <TopBar />
      <div
        style={{ height: "92vh" }}
        className=" flex flex-col bg-editor_secondary"
      >
        <div className="flex flex-grow flex-shrink-0  border-t-2 border-b-2 border-black bg-tree-hard">
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
            className="flex flex-grow "
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
                <TabPane
                  tab={<div className="text-base">Html </div>}
                  key="html"
                >
                  <HtmlPanel />
                </TabPane>
                <TabPane tab={<div className="text-base">Css</div>} key="css">
                  <CssPanel />
                </TabPane>
              </Tabs>
            </div>
            <div>
              <Preview />
            </div>
          </Split>
          <Modal />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Tree;
