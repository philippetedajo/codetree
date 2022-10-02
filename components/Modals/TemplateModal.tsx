import { useTree } from "../../hooks";
import { treeTemplates } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { theme_state } from "../../store/features/themeSlice";
import { compiler_state } from "../../store/features/compilerSlice";
import { TemplateSelectionSkeleton } from "../Skeleton/TemplateSelectionSkeleton";

export const TemplateModal = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(theme_state);
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
      className="p-2 rounded-sm"
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
      <div className="border-b border-black h-10 flex items-center px-7">
        <h1 className="text-lg">Templates</h1>
      </div>
      <div className="pt-6 px-7 flex flex-wrap gap-x-10 gap-y-5">
        {esbuildStatus.isReady ? templates : <TemplateSelectionSkeleton />}
      </div>
    </div>
  );
};
