import "./styles/code-editor-header.css";

const EditorHeader = () => {
  return (
    <header className="editor-header bg-editorprimary border-b-2 border-editorborder">
      <div className="tinycode">Logo</div>
      <div className="editor-header-details">
        <section className="editor-header-details-section">
          <small>John Doe</small>
        </section>
      </div>
    </header>
  );
};

export default EditorHeader;
