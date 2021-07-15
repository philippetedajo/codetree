import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Tabs, { TabPane } from "rc-tabs";
import { GoSettings } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  set_settings_modal,
} from "../../store/features/editorSlice";
import OptionsTab from "./OptionsTab";

export const SettingsModal = () => {
  const { isSettingsOpen } = useAppSelector(editor_state);
  const dispatch = useAppDispatch();

  return (
    <>
      <Transition appear show={isSettingsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => dispatch(set_settings_modal(false))}
        >
          <div className="min-h-screen px-4 text-center z-50">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

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
                        <GoSettings size={27} className="mr-2" /> Editor
                      </div>
                    }
                    key="editor"
                  >
                    <OptionsTab />
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
