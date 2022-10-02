import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { editor_state, set_options } from "../../store/features/editorSlice";
import { modalVariant } from "./config";
import { theme_state } from "../../store/features/themeSlice";

const SettingsModal = () => {
  const dispatch = useAppDispatch();
  const { options } = useAppSelector(editor_state);
  const { theme } = useAppSelector(theme_state);

  const { register, handleSubmit } = useForm();

  const onChangeOptions = ({
    fontSize,
    fontWeight,
    minimapEnabled,
    minimapScale,
    wordWrap,
    autoClosingBrackets,
  }: any) => {
    const custom = {
      fontSize: parseInt(fontSize),
      fontWeight: fontWeight,
      minimap: {
        enabled: minimapEnabled,
        scale: parseInt(minimapScale),
      },
      wordWrap: wordWrap,
      autoClosingBrackets: { autoClosingBrackets },
      showUnused: true,
      automaticLayout: true,
      tabSize: 2,
      renderLineHighlight: "none",
      scrollbar: { verticalScrollbarSize: 10, verticalSliderSize: 10 },
    };

    dispatch(set_options(custom));
  };

  return (
    <motion.div
      className="sm:mt-10 mx-auto h-full sm:h-auto sm:w-8/12 lg:w-6/12 sm:rounded-xl overflow-hidden glassmorphism"
      variants={modalVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeOut", duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{ backgroundColor: theme.foreground }}
        className="border-b border-black h-10 flex items-center px-7"
      >
        <h1 className="text-xl"> Settings</h1>
      </div>

      <div className="overflow-auto h-full">
        <div className="pt-6 px-7 ">
          <form
            className=" mb-12 overflow-auto"
            onSubmit={handleSubmit(onChangeOptions)}
          >
            {/* Fonts */}
            <div className="editor-sub-settings">
              <div className="title">Font size : </div>
              <div className="description">Set the font size in pixels.</div>
              <select
                {...register("fontSize")}
                id="fontSize"
                className="editor-select"
                defaultValue={options.fontSize}
                style={{
                  backgroundColor: theme.foreground,
                }}
              >
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
              </select>
            </div>

            <div className="editor-sub-settings">
              <div className="title">Font weight : </div>
              <div className="description">Defines how bold you text are.</div>
              <select
                {...register("fontWeight")}
                id="fontWeight"
                className="editor-select"
                defaultValue={options.fontWeight}
                style={{
                  backgroundColor: theme.foreground,
                }}
              >
                <option value="500">Regular</option>
                <option value="600">Bold</option>
              </select>
            </div>

            {/* Minimap */}
            <div className="editor-sub-settings">
              <div className="title">Enabled minimap : </div>
              <div className="description">
                Control if the minimap should be shown.
              </div>
              <div className="flex items-center">
                <input
                  {...register("minimapEnabled")}
                  id="minimap-enabled"
                  className="editor-select mr-2"
                  type="checkbox"
                  defaultChecked={options.minimap?.enabled}
                  style={{
                    backgroundColor: theme.foreground,
                  }}
                />
                <label>On </label>
              </div>
            </div>

            <div className="editor-sub-settings">
              <div className="title">Scale : </div>
              <div className="description">Set the size of the minimap.</div>
              <select
                {...register("minimapScale")}
                id="minimap-scale"
                className="editor-select"
                defaultValue={options.minimap?.scale}
                style={{
                  backgroundColor: theme.foreground,
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>

            {/* Others */}
            <div className="editor-sub-settings">
              <div className="title">Word wrap : </div>
              <div className="description">Control if lines should wrap.</div>
              <select
                {...register("wordWrap")}
                id="wordWrap"
                className="editor-select"
                defaultValue={options.wordWrap}
                style={{
                  backgroundColor: theme.foreground,
                }}
              >
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </div>

            <div className="editor-sub-settings">
              <div className="title">Auto Closing Brackets : </div>
              <div className="description">
                Controls if brackets should close automatically
              </div>
              <select
                {...register("autoClosingBrackets")}
                id="autoClosingBrackets"
                className="editor-select"
                defaultValue={options.autoClosingBrackets}
                style={{
                  backgroundColor: theme.foreground,
                }}
              >
                <option value="always">always</option>
                <option value="languageDefined">languageDefined</option>
                <option value="beforeWhitespace">beforeWhitespace</option>
                <option value="never">never</option>
              </select>
            </div>

            <button className="editor-button h-9 mt-6" type="submit">
              Save settings
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsModal;
