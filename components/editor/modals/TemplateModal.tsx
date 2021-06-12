import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_template_modal,
} from "../../../store/features/editorSlice";
import Tabs, { TabPane } from "rc-tabs";
import { CgTrees } from "react-icons/cg";
import TemplateSelect from "../options/TemplateSelect";
import { GiPartyPopper } from "react-icons/gi";
import News from "../options/News";

export const TemplateModal = () => {
  const dispatch = useAppDispatch();
  const { isTemplateModalOpen } = useAppSelector(editor_state);

  function closeModal() {
    dispatch(update_template_modal(false));
  }

  return (
    <>
      <Transition appear show={isTemplateModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center z-50">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block lg:w-7/12 h-96 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded">
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
                    <TemplateSelect closeModal={closeModal} />
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};