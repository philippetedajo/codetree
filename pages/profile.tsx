import React from "react";
import { PencilIcon } from "@heroicons/react/outline";
import Router from "next/router";
import { checkSession, withSession } from "../utils";
import { useUser } from "../hooks";

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
    <div className="px-4 lg:px-24 pt-8">
      <div className="flex">
        <div
          style={{ height: 90, width: 90 }}
          className="p-0.5 bg-gradient-to-b from-gray-400 to-pink-300 rounded-full mr-5 shadow-lg"
        >
          <img
            className="rounded-full"
            height={90}
            width={90}
            src="/fake/profile6.png"
            alt="Profile image"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div> {user?.data?.name} </div>
          <small className="text-gray-500">{user?.data?.description}</small>
          <button
            onClick={() => Router.push("/settings")}
            className="border mt-2 px-3 flex items-center justify-center shadow-md"
          >
            Edit profile <PencilIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="flex text-2xl mt-5 leading-9 tracking-wide">
        {user?.data?.status}
      </div>

      <div className="mt-5 flex">
        <div className="mr-10 flex flex-col items-center">
          <small className="text-gray-500 ">Followers</small>
          <div className="text-2xl">9034</div>
        </div>
        <div className="mr-10 flex flex-col items-center">
          <small className="text-gray-500 ">Likes</small>
          <div className="text-2xl">340</div>
        </div>
        <div className="mr-10 flex flex-col items-center">
          <small className="text-gray-500 ">Following</small>
          <div className="text-2xl">4567</div>
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