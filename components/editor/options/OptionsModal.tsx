import React, { useState } from "react";
import ReactModal from "react-modal";
import { GiPartyPopper } from "react-icons/gi";
import { CgTrees } from "react-icons/cg";
import Tabs, { TabPane } from "rc-tabs";
import TemplateSelect from "./TemplateSelect";
import News from "./News";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#editor_modal");

const Bar = () => {
  const [showModal, setShowModal] = useState<any>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const customModalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      height: "30rem",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      margin: 0,
      border: "none",
      borderRadius: "0",
    },
  };

  return (
    <div id="editor_modal">
      <button
        onClick={openModal}
        className="px-2 py-1 border-2 border-tree-hard flex items-start hover:text-green-500"
      >
        Create a tree <CgTrees size={27} className="ml-2" />
      </button>
      <ReactModal
        isOpen={showModal}
        style={customModalStyles}
        contentLabel="Create a tree"
        closeTimeoutMS={300}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
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
            <TemplateSelect setShowModal={setShowModal} />
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
      </ReactModal>
    </div>
  );
};

export default Bar;
