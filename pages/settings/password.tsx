import React, { useState } from "react";
import { SettingsLayout } from "../../components/share";
import { useForm } from "react-hook-form";
import {
  checkSession,
  fetcher,
  withSession,
  updatePasswordSchema,
} from "../../utils";
import { UpdatePasswordForm } from "../../_types/profile_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../hooks";

const Password = () => {
  const { user } = useUser();

  const { register, handleSubmit, errors } = useForm<UpdatePasswordForm>({
    resolver: yupResolver(updatePasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (formData: UpdatePasswordForm) => {
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/auth/profile/updatePassword`;

    console.log(formData);
    setLoading(true);

    //TODO

    // await fetcher(url, "POST", user.token, {
    //   lastPassword: formData.last_password,
    //   password: formData.password,
    // }).then((result) => console.log(result));

    setLoading(false);
  };

  return (
    <SettingsLayout>
      <form
        className="flex flex-col pt-3 w-80 md:w-112"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-4 text-3xl ">Change your password </h2>

        <label className="mb-2">Your last password *</label>
        <input
          className="border-2 border-black"
          type="password"
          name="last_password"
          ref={register}
        />
        <small className="mt-1 mb-6 text-red-500">
          {errors.last_password?.message}
        </small>

        <label className="mb-2">Your new password *</label>
        <input
          className="border-2 border-black"
          type="password"
          name="password"
          ref={register}
        />
        <small className="mt-1 text-red-500">{errors.password?.message}</small>

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

export default Password;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  return {
    props: {},
  };
});
