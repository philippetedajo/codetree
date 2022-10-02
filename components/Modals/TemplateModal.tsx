import { motion } from "framer-motion";
import { useTree } from "../../hooks";
import { treeTemplates } from "../../constants";
import { useAppSelector } from "../../store/hook";
import { theme_state } from "../../store/features/themeSlice";
import { compiler_state } from "../../store/features/compilerSlice";
import { TemplateSelectionSkeleton } from "../Skeleton/TemplateSelectionSkeleton";
import { modalVariant } from "./config";

const TemplateModal = () => {
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
    <motion.div
      style={{ backgroundColor: theme.background }}
      className="sm:mt-44 mx-auto h-full sm:h-auto sm:w-8/12 lg:w-6/12 sm:pb-20 sm:rounded-xl overflow-hidden"
      variants={modalVariant}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 0.4 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{ backgroundColor: theme.foreground }}
        className="border-b border-black h-10 flex items-center px-7"
      >
        <h1 className="text-xl">Templates</h1>
      </div>
      <div className="pt-6 px-7 flex flex-wrap gap-x-14 gap-y-8">
        {esbuildStatus.isReady ? templates : <TemplateSelectionSkeleton />}
      </div>
    </motion.div>
  );
};

export default TemplateModal;
