import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import EditorHeader from "../components/EditorHeader";
import EditorFooter from "../components/EditorFooter";
import Editor from "../components/Editor";
import "./styles/playground.css";
import "./styles/editor-syntax.css";

export const Playground = () => {
  return (
    <div className="bg-editorsecondary">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Playground</title>
      </Helmet>
      <div className="editor-container">
        <EditorHeader />
        <Editor />
        <EditorFooter />
      </div>
    </div>
  );
};
