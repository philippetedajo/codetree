import React, { ReactNode } from "react";
import { Allotment } from "allotment";
import { LayoutPriority } from "allotment/dist/types/src/split-view";

interface Pane {
  panelA: ReactNode;
  panelB: ReactNode;
  panelC: ReactNode;
  lastPanelVisibility: boolean;
}

const EditorPanel = ({ panelA, panelB, panelC, lastPanelVisibility }: Pane) => {
  return (
    <div style={{ height: "calc(100vh - 8rem)" }}>
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
    </div>
  );
};

export default EditorPanel;
