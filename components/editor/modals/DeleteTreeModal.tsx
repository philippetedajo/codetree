import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_create_tree_modal,
} from "../../../store/features/editorSlice";
import { fetcher } from "../../../utils";
import { useUser } from "../../../hooks";

export const DeleteTreeModal = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { isCreateTreeModalOpen } = useAppSelector(editor_state);

  function closeModal() {
    dispatch(update_create_tree_modal(false));
  }

  const [isLoading, setIsLoading] = useState(false);

  const DeleteTree = async (hash) => {
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/delete`;
    setIsLoading(true);
    await fetcher(url, "DELETE", user.token).then((data) => console.log(data));
    setIsLoading(false);
  };

  return (
    <>
      <Transition appear show={isCreateTreeModalOpen} as={Fragment}>
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-tree-soft shadow-xl rounded">
                <div>
                  <h2>Are you sure ? </h2>
                  <div>
                    <button
                      disabled={isLoading}
                      className={` border-2 border-gray-400 text-gray-400 w-20 mt-5 h-10 mb-4 ${
                        isLoading ? "disabled:opacity-70" : ""
                      }`}
                    >
                      {isLoading ? "... Processing" : "Confirm"}
                    </button>
                    <button disabled={isLoading}>Cancel</button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
