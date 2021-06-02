import React from "react";
import { PencilIcon } from "@heroicons/react/outline";
import { HeartIcon, EyeIcon } from "@heroicons/react/solid";
import Router from "next/router";
import { checkSession, withSession } from "../utils";
import { useUser } from "../hooks";
import { SkeletonProfile } from "../components/Skeleton";

const Profile = () => {
  const { user } = useUser();

  let fakeBox = ["box", "box", "box", "box", "box", "box", "box", "box", "box"];

  const trees = fakeBox.map((tree, id) => (
    <div
      className="border h-72 rounded shadow-md flex items-center justify-center"
      key={id}
    >
      {tree}
    </div>
  ));

  return (
    <div style={{ paddingTop: "15vh" }} className="px-4 lg:px-24 pt-4">
      <div className="flex flex-col sm:flex-row w-full justify-between">
        {user ? (
          <div>
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

        <div className="mt-5 flex">
          <div className="mr-10 flex flex-col items-center">
            <small className="text-gray-500 flex items-center">
              Likes <HeartIcon className="w-4 h-4 ml-1" />
            </small>
            <div className="text-3xl">340</div>
          </div>
          <div className="mr-10 flex flex-col items-center">
            <small className="text-gray-500 flex items-center ">
              Views <EyeIcon className="w-4 h-4 ml-1" />
            </small>
            <div className="text-3xl">4567</div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3 text-2xl">Trees</div>
      <div className="pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trees}
      </div>
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
