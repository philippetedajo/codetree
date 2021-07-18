import React from "react";
import { pythonTemplate } from "../../../constants";
import { useTree } from "../../../hooks";

export const PythonTab = () => {
  const { setTree } = useTree();
  let pyArr = [];

  for (const item of Object.entries(pythonTemplate)) {
    pyArr.push(item);
  }

  const PythonTemplates = pyArr.map((template, key) => (
    <button
      key={key}
      name={template[1].name}
      onClick={() => setTree(template[1])}
      className="hover:bg-tree-soft p-2 rounded-sm"
    >
      <div className="flex pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={template[1].name}
          src={template[1].iconSrc}
          className="h-9 w-9 rounded-sm"
        />
        <div className="flex flex-col items-start justify-start pl-4">
          <div>{template[1].name}</div>
          <div className="text-xs text-gray-400">{template[1].description}</div>
        </div>
      </div>
    </button>
  ));

  return (
    <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {PythonTemplates}
    </div>
  );
};
