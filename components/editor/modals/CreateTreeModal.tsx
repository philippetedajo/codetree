import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Router from "next/router";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { responseType } from "../../../_types/share_types";
import {
  editor_state,
  update_create_tree_modal,
} from "../../../store/features/editorSlice";
import { fetcher, newTreeSchema } from "../../../utils";
import { useUser } from "../../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const CreateTreeModal = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { isCreateTreeModalOpen } = useAppSelector(editor_state);

  function closeModal() {
    dispatch(update_create_tree_modal(false));
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newTreeSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const CreateNewTree = async (name: string) => {
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/create`;
    setIsLoading(true);
    await fetcher(url, "POST", user.token, {
      name,
      languages:
        '{"js":{"code":{"data":"document.getElementById(\\"root\\").innerHTML = `\\n<h1>Welcome to your new Playground</h1>\\n<div>\\n  We use the same configuration as Esbuild to bundle this sandbox, you can find more\\n  info about Esbuild \\n  <a href=\\"https://esbuild.github.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">here</a>.\\n</div>\\n`;\\n","error":"","loading":false},"transformer":"js"},"css":{"code":{"data":"body {\\n  font-family: sans-serif;\\n  text-align: center;\\n}\\n","error":"","loading":false},"transformer":"css"},"html":{"code":{"data":"","error":"","loading":false},"transformer":"html"}}',
      public: true,
      template: "custom",
      description: "New tree",
    }).then((data) => {
      let hash = data?.data?.data?.data?.hash;
      if (data?.type === responseType.success) {
        closeModal();
        Router.push(`/playground/${hash}`);
      }
      setResult(data);
    });
    setIsLoading(false);
  };

  const onSubmit = ({ new_tree_name }) => {
    CreateNewTree(new_tree_name);
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
                <form
                  className="flex flex-col mt-3 text-white "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h2 className="mb-5 text-3xl">Create a new tree</h2>

                  <label className="mb-2">Name *</label>
                  <input name="new_tree_name" type="text" ref={register} />
                  <small className="mt-1 border-none text-red-500">
                    {errors.new_tree_name?.message}
                  </small>
                  <small className="text-red-500 mt-2">
                    {result?.type === responseType.error
                      ? result?.data?.data?.name
                      : ""}
                  </small>

                  <button
                    disabled={isLoading}
                    className={` border-2 border-gray-400 text-gray-400 w-20 mt-5 h-10 mb-4 ${
                      isLoading ? "disabled:opacity-70" : ""
                    }`}
                  >
                    {isLoading ? "... Processing" : "Create"}
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
