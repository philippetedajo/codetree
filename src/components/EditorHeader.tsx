import "./styles/code-editor-header.css";

const EditorHeader = () => {
  return (
    <header className="editor-header">
      <div className="tinycode">Logo</div>
      <div className="editor-header-details">
        <section className="editor-header-details-section">
          <div>Simple template</div>
          <small>John Doe</small>
        </section>
      </div>
    </header>
  );
};

export default EditorHeader;
