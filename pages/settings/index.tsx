import React, { useState } from "react";
import {
  checkSession,
  fetcher,
  notify,
  updateProfileSchema,
  withSession,
} from "../../utils";
import { SettingsLayout } from "../../components/layouts";
import { useForm } from "react-hook-form";
import { UpdateProfileForm } from "../../_types/profile_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../hooks";
import { responseType } from "../../_types/share_types";

const Index = () => {
  const { user } = useUser();

  const { register, handleSubmit, errors } = useForm<UpdateProfileForm>({
    resolver: yupResolver(updateProfileSchema),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (formData: UpdateProfileForm) => {
    setLoading(true);

    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/auth/profile/update`;
    await fetcher(url, "POST", user?.token, formData).then((result) => {
      if (result.data.code === 200) {
        notify(responseType.success, "We've saved your profile changes");
      }
      setData(result);
    });

    setLoading(false);
  };

  console.log(data);
  //TODO AVATAR UPDATE

  return (
    <SettingsLayout>
      <form
        className="flex flex-col pt-3 w-80 md:w-112"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-4 text-3xl ">Change your profile </h2>

        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col md:pr-2">
            <label className="mb-2">Full name *</label>
            <input
              className="border-2 border-black mb-1"
              name="name"
              type="text"
              ref={register}
              defaultValue={user?.profile?.data?.data?.name}
            />
            <small className="mb-4 text-red-500">{errors.name?.message}</small>
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2">Username *</label>
            <input
              className="border-2 border-black mb-1"
              name="username"
              type="text"
              ref={register}
              defaultValue={user?.profile?.data?.data?.username}
            />
            <small className="mb-4 text-red-500">
              {errors.username?.message}
            </small>
          </div>
        </div>

        <label className="mb-2">Your status</label>
        <input
          className="border-2 border-black"
          type="text"
          name="status"
          ref={register}
          defaultValue={user?.profile?.data?.data?.status}
        />
        <small className="mt-1 mb-6 text-red-500">
          {errors.status?.message}
        </small>

        <label className="mb-2">Your Bio</label>
        <textarea
          rows={5}
          className="border-2 border-black rounded"
          name="description"
          ref={register}
          defaultValue={user?.profile?.data?.data?.description}
        />
        <small className="mt-1 text-red-500">
          {errors.description?.message}
        </small>

        <button
          disabled={loading}
          className={`bg-blue-600 text-white mt-8 h-10 mb-4 ${
            loading ? "disabled:opacity-70" : ""
          }`}
        >
          {loading ? "... Processing" : "Save"}
        </button>

        <div className="text-red-500">
          {data?.type === "error" ? data?.data?.message : ""}
        </div>
      </form>
    </SettingsLayout>
  );
};

export default Index;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  return {
    props: {},
  };
});
