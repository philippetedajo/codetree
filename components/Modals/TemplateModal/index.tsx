import React from "react";
import { motion } from "framer-motion";
import Tabs, { TabPane } from "rc-tabs";
import { CgTrees } from "react-icons/cg";
import { GiPartyPopper } from "react-icons/gi";

import { TreeTab } from "./TreeTab";
import { News } from "./NewsTab";
import { modalVariant } from "../config";

export const TemplateModal = () => {
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
                <CgTrees size={27} className="mr-2" />
                trees
              </div>
            }
            key="trees"
          >
            <TreeTab />
          </TabPane>
          <TabPane
            tab={
              <div className="flex">
                <GiPartyPopper size={27} className="mr-2" /> News
              </div>
            }
            key="news"
          >
            <News />
          </TabPane>
        </Tabs>
      </div>
    </motion.div>
  );
};
