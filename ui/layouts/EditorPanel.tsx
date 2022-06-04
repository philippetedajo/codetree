import React from "react";
import { Allotment } from "allotment";

interface EditorPanel {
  panelA: any;
  panelB: any;
  panelC: any;
}

const EditorPanel = ({ panelA, panelB, panelC }: EditorPanel) => {
  return (
    <Allotment>
      <Allotment.Pane>{panelA}</Allotment.Pane>
      <Allotment vertical={true}>
        <Allotment.Pane preferredSize="100%">{panelB}</Allotment.Pane>
        <Allotment.Pane>{panelC}</Allotment.Pane>
      </Allotment>
    </Allotment>
  );
};

export default EditorPanel;
