import React from "react";
import { webTemplates } from "../../../constants";
import { useTree } from "../../../hooks";
import { TemplateSelectionSkeleton } from "../../Skeleton";
import { useAppSelector } from "../../../store/hook";
import { compiler_state } from "../../../store/features/compilerSlice";

const WebTrees = () => {
  const { esbuildStatus } = useAppSelector(compiler_state);
  const { setTree } = useTree();
  let webArr = [];

  for (const item of Object.entries(webTemplates)) {
    webArr.push(item);
  }

  const WebTemplates = webArr.map((template, key) => (
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
      {esbuildStatus.isReady ? WebTemplates : <TemplateSelectionSkeleton />}
    </div>
  );
};

export default WebTrees;
