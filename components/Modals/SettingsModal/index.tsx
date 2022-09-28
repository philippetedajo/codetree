import { motion } from "framer-motion";
import Tabs, { TabPane } from "rc-tabs";
import { GoSettings } from "react-icons/go";

import OptionsTab from "./OptionsTab";
import { modalVariant } from "../config";

export const SettingsModal = () => {
  return (
    <motion.div
      className="sm:mt-10 mx-auto sm:h-auto sm:w-8/12 lg:w-6/12"
      variants={modalVariant}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeOut", duration: 0.4 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="overflow-hidden h-full sm:h-80 shadow-xl sm:rounded-xl">
        <Tabs
          className="option-modal-tabs"
          tabPosition="left"
          tabBarGutter={16}
        >
          <TabPane
            tab={
              <div className="flex">
                <GoSettings size={27} className="mr-2" /> Editor
              </div>
            }
            key="editor"
          >
            <OptionsTab />
          </TabPane>
        </Tabs>
      </div>
    </motion.div>
  );
};
