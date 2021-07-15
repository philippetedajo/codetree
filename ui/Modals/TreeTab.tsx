import { useTree } from "../../hooks";
import { treeTemplates } from "../../constants";
import { useAppSelector } from "../../store/hook";
import { compiler_state } from "../../store/features/compilerSlice";
import { TemplateSelectionSkeleton } from "../Skeleton";

export const TreeTab = () => {
  const { esbuildStatus } = useAppSelector(compiler_state);
  const { setTree } = useTree();

  let arr = [];

  for (const item of Object.entries(treeTemplates)) {
    arr.push(item);
  }

  const templates = arr.map((template, key) => (
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
    <div>
      <h1 className="text-2xl pb-3 border-b border-tree-border">
        Select your tree
      </h1>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {esbuildStatus.isReady ? templates : <TemplateSelectionSkeleton />}
      </div>
    </div>
  );
};
