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
      width: "60%",
      height: "30rem",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <button onClick={openModal}>Create a tree</button>
      <ReactModal
        isOpen={showModal}
        style={customModalStyles}
        contentLabel="Create a tree"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={300}
      >
        <button onClick={closeModal}>Close Modal</button>
        <Tabs tabPosition="left" tabBarGutter={16}>
          <TabPane key="light" tab="light">
            Light
          </TabPane>
          <TabPane key="bamboo" tab="bamboo">
            Bamboo
          </TabPane>
        </Tabs>
      </ReactModal>
    </div>
  );
};

export default Bar;
