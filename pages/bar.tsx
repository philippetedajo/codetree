import React, { useState } from "react";

const Bar = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        style={{ height: isFocus ? "0vh" : "7vh" }}
        className="border-2 border-blue-600 flex flex-shrink-0 transition-all duration-700"
      >
        Header
      </header>
      <main className="border-2 border-green-600 flex flex-grow flex-shrink-0">
        main
        <button onClick={() => setIsFocus(!isFocus)}>toogle focus</button>
      </main>
      <footer
        style={{ height: "3vh" }}
        className="border-2 border-red-600 flex flex-shrink-0"
      >
        footer
      </footer>
    </div>
  );
};

export default Bar;
