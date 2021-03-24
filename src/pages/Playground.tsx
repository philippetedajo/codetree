import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import EditorHeader from "../components/EditorHeader";
import EditorFooter from "../components/EditorFooter";
import EditorTemplate from "../components/EditorTemplate";
import "./styles/playground.css";

export const Playground = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tinyCode</title>
        <link rel="canonical" href="https://tiny-code.vercel.Playground/" />
      </Helmet>
      <div className="editor-container">
        <EditorHeader />
        <EditorTemplate template="react" />
        <EditorFooter />
      </div>
    </>
  );
};
