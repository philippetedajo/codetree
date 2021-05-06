import React, { useState } from "react";
import ReactModal from "react-modal";
import Tabs, { TabPane } from "rc-tabs";

const Bar = () => {
  const [showModal, setShowModal] = useState(false);

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
      color: "white",
      width: "60%",
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
      borderRadius: "5px",
    },
  };

  return (
    <div>
      <button onClick={openModal}>Create a tree</button>
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
          <TabPane tab="Templates" key="templates">
            Template
          </TabPane>
          <TabPane tab="News" key="news">
            News
          </TabPane>
        </Tabs>
      </ReactModal>
    </div>
  );
};

export default Bar;
