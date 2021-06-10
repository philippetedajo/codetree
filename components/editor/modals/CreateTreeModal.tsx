import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
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

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
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
                  <small className="mt-1 border-none">
                    {errors.new_tree_name?.message}
                  </small>

                  <button
                    disabled={isLoading}
                    className={` border-2 text-white w-44 mt-7 h-10 mb-4 ${
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
