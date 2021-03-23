import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import EditorHeader from "./components/EditorHeader";
import EditorFooter from "./components/EditorFooter";
import EditorTemplate from "./components/EditorTemplate";

import "./editor.css";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tinyCode</title>
        <link rel="canonical" href="https://tiny-code.vercel.app/" />
      </Helmet>
      <div className="editor-container">
        <EditorHeader />
        <EditorTemplate template="react" />
        <EditorFooter />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
