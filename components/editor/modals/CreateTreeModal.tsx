import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_create_tree_modal,
} from "../../../store/features/editorSlice";
import { fetcher } from "../../../utils";
import { useUser } from "../../../hooks";

export const CreateTreeModal = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { isCreateTreeModalOpen } = useAppSelector(editor_state);

  function closeModal() {
    dispatch(update_create_tree_modal(false));
  }

  const CreateNewTree = async () => {
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/create`;
    await fetcher(url, "POST", user.token, {
      name: "Alpha",
      languages:
        '{"js":{"code":{"data":"document.getElementById(\\"root\\").innerHTML = `\\n<h1>Welcome to your new Playground</h1>\\n<div>\\n  We use the same configuration as Esbuild to bundle this sandbox, you can find more\\n  info about Esbuild \\n  <a href=\\"https://esbuild.github.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">here</a>.\\n</div>\\n`;\\n","error":"","loading":false},"transformer":"js"},"css":{"code":{"data":"body {\\n  font-family: sans-serif;\\n  text-align: center;\\n}\\n","error":"","loading":false},"transformer":"css"},"html":{"code":{"data":"<div id=\\"root\\"></div>","error":"","loading":false},"transformer":"html"}}',
      public: true,
      template: "custom",
      description: "New tree",
    }).then((data) => console.log(data));
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
