import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import { Monaco } from "./Monaco";
import { useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";
import { EditorValueInterface } from "../../_types/editorTypes";

const InputPanel = ({ editorValue }: { editorValue: EditorValueInterface }) => {
  const dataToMap = Object.entries(editorValue.tabs);

  const tabPane = dataToMap.map((item, key) => (
    <TabPane tab={<div>{item[1].title}</div>} key={key}>
      <Monaco tab={item[0]} monacoLanguage={item[1].monacoLanguage} />
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

const EditorInput = React.memo(InputPanel);

export default EditorInput;
