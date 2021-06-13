import React, { useEffect, useState } from "react";
import { PencilIcon, ViewGridAddIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Router from "next/router";
import { useUser } from "../hooks";
import { SkeletonProfile, SkeletonTree } from "../components/Skeleton";
import { checkSession, fetcher, notify, withSession } from "../utils";
import { CreateTreeModal } from "../components/editor/modals";
import { useAppDispatch } from "../store/hook";
import { update_create_tree_modal } from "../store/features/editorSlice";
import { responseType } from "../_types/share_types";

const Profile = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();

  function openCreateModal() {
    dispatch(update_create_tree_modal(true));
  }

  const [allTrees, setAllTree] = useState([]);
  const [isLoadingAllTrees, setIsLoadingAllTrees] = useState(false);
  const [isDeletingTrees, setIsDeletingTrees] = useState(false);

  useEffect(() => {
    const getAllTrees = async () => {
      const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/mine`;
      setIsLoadingAllTrees(true);
      await fetcher(url, "GET", user.token, null).then((data) => {
        setAllTree(data?.data?.data?.data);
        setIsLoadingAllTrees(false);
      });
    };
    if (user) getAllTrees();
  }, [user]);

  const DeleteTree = async (hash) => {
    const newTreesList = allTrees.filter((el) => el.hash !== hash);
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/delete/${hash}`;
    setIsDeletingTrees(true);
    const response = await fetcher(url, "DELETE", user.token);
    setIsDeletingTrees(false);

    if (response.type === responseType.success) {
      notify(responseType.success, "Your tree has been delete");
      setAllTree(newTreesList);
    }
  };

  const trees = allTrees.map(({ hash, description, name }) => (
    <div
      key={hash}
      className="border h-72 rounded-md overflow-hidden shadow-md flex flex-col transform hover:scale-105 transition-all duration-500"
    >
      <Link href={`/playground/${hash}`}>
        <div className=" w-full h-4/5 bg-black cursor-pointer" />
      </Link>
      <div className="w-full h-1/5 flex justify-between px-5 pt-1">
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className="cursor-pointer" onClick={() => DeleteTree(hash)}>
          {isDeletingTrees ? (
            "..."
          ) : (
            <XCircleIcon className="w-6 h-6 mt-3 text-gray-400" />
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ paddingTop: "15vh" }} className="px-4 lg:px-24 pt-4">
      <div className="flex flex-col sm:flex-row w-full justify-between">
        {user ? (
          <div className="">
            <div className="flex">
              <div className="profile-pic-wrapper flex justify-center items-center bg-gradient-to-b from-gray-400 to-pink-300 rounded-full mr-5 shadow-lg">
                <img
                  className="profile-pic rounded-full  object-cover shadow-lg"
                  src={user?.profile?.data?.profile || "/blank-profile.png"}
                  alt="Profile image"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-xl"> {user?.profile?.data?.name} </div>
                <small className="text-gray-500 ">
                  {user?.profile?.data?.description}
                </small>
                <div className="flex text-2xl mt-2  leading-9 tracking-wide">
                  {user?.profile?.data?.status}
                </div>
                <button
                  onClick={() => Router.push("/settings")}
                  className="mt-3 px-3 flex items-center justify-center shadow-md"
                >
                  Edit profile <PencilIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <SkeletonProfile />
        )}
      </div>
      <div className="mt-5 mb-3 flex justify-between text-2xl">
        <div>Trees</div>
        <div
          className="flex items-center text-xl text-gray-400 cursor-pointer"
          onClick={openCreateModal}
        >
          <ViewGridAddIcon className="w-6 h-6 mr-2" />
          New
        </div>
      </div>
      <div className="pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        {isLoadingAllTrees ? <SkeletonTree /> : trees}
      </div>
      <CreateTreeModal />
    </div>
  );
};

export default Profile;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  return {
    props: {},
  };
});
