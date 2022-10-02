import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import {
  compiler_state,
  initEsbuild,
} from "../../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";
import { theme_state } from "../../store/features/themeSlice";

import ConsoleLog from "./ConsoleLog";
import Iframe from "./Iframe";
import InputCodeTab from "./InputCodeTab";
import Footer from "./Footer";
import Header from "./Header";
import { ModalEnum, open_modal } from "../../store/features/modalSlice";

const Pane = dynamic(() => import("./Pane"), {
  ssr: false,
});

const Playground = () => {
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector(theme_state);
  const { esbuildStatus, isCompiling, output } = useAppSelector(compiler_state);
  const { logs, editorValue, isLogTabOpen } = useAppSelector(editor_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  useEffect(() => {
    dispatch(open_modal(ModalEnum.TEMPLATE));
  }, [dispatch]);

  return (
    <div style={{ background: theme.background }}>
      <Header />
      <Pane
        panelA={<InputCodeTab editorValue={editorValue} />}
        panelB={
          <Iframe
            tabs={editorValue.tabs}
            output={output}
            isCompiling={isCompiling}
            esbuildStatus={esbuildStatus}
          />
        }
        panelC={<ConsoleLog logs={logs} />}
        lastPanelVisibility={isLogTabOpen}
      />

      <Footer />
    </div>
  );
};

export default Playground;
