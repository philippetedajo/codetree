import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import { Monaco } from "./Monaco";

export const EditorInput = () => {
  const data = [
    { title: "Js", lang: "javascript" },
    { title: "Html", lang: "html" },
    { title: "Css", lang: "css" },
  ];

  const tabPane = data.map((item) => (
    <TabPane tab={<div>{item.title}</div>} key={item.lang}>
      <Monaco language={item.lang} />
    </TabPane>
  ));

  return (
    <Tabs
      className="editor-input-tabs"
      tabPosition="top"
      tabBarGutter={16}
      defaultActiveKey="javascript"
    >
      {tabPane}
    </Tabs>
  );
};
