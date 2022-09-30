import React, { ReactNode } from "react";
import { Allotment } from "allotment";
import { LayoutPriority } from "allotment/dist/types/src/split-view";

interface MiddlePanel {
  panelA: ReactNode;
  panelB: ReactNode;
  panelC: ReactNode;
  lastPanelVisibility: boolean;
}

const EditorPanel = ({
  panelA,
  panelB,
  panelC,
  lastPanelVisibility,
}: MiddlePanel) => {
  return (
    <Allotment>
      <Allotment.Pane>{panelA}</Allotment.Pane>

      <Allotment onVisibleChange={function noRefCheck() {}} vertical={true}>
        <Allotment.Pane
          priority={"HIGH" as LayoutPriority}
          preferredSize="70%"
          visible
        >
          {panelB}
        </Allotment.Pane>

        <Allotment.Pane
          preferredSize="30%"
          priority={"LOW" as LayoutPriority}
          snap
          visible={lastPanelVisibility}
        >
          {panelC}
        </Allotment.Pane>
      </Allotment>
    </Allotment>
  );
};

export default EditorPanel;
