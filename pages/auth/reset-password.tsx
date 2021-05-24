import React, { useState } from "react";
import Head from "next/head";
import { useUser } from "../../hooks";
import { useForm } from "react-hook-form";
import { ResetPasswordForm } from "../../_types/auth_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetcher, notify, resetPasswordSchema } from "../../utils";
import { useRouter } from "next/router";
import { responseType } from "../../_types/share_types";

const ResetPassword = () => {
  //here we just check if user is already logged in and redirect to profile
  const { user } = useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (formData: ResetPasswordForm) => {
    setLoading(true);

    const response = await fetcher("/api/auth/reset-password", "POST", null, {
      password: formData.password,
      repeatPassword: formData.confirm_password,
      token: router.query.cmrk,
    });
    setData(response);

    setLoading(false);
  };

  if (!user || user.isLoggedIn) {
    return <div>...loading</div>;
  }

  if (data?.data?.code === 200) {
    notify(
      responseType.success,
      "Password change successfully, you can now login."
    );

    router.push({
      pathname: "/auth/login",
    });
  }

  return (
    <>
      <Head>
        <title>Reset password | Codetree</title>
        <meta name="description" content="Login to your Codetree account" />
      </Head>
      <div className="h-screen flex flex-col items-center pt-14">
        <form
          className="flex flex-col mt-3 w-80 md:w-112"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-8 text-3xl">Please set a new password</h2>

          <label className="mb-2">Password *</label>
          <input
            className="border-2 border-black"
            name="password"
            type="password"
            ref={register}
          />
          <small className="mt-1 mb-6 text-red-500">
            {errors.password?.message}
          </small>

          <label className="mb-2">Confirm password *</label>
          <input
            className="border-2 border-black"
            type="password"
            name="confirm_password"
            ref={register}
          />
          <small className="mt-1 text-red-500">
            {errors.confirm_password?.message}
          </small>

          <button
            disabled={loading}
            className={`bg-blue-600 text-white mt-8 h-10 mb-4 ${
              loading ? "disabled:opacity-70" : ""
            }`}
          >
            {loading ? "... Processing" : "Reset"}
          </button>

          <div className="text-red-500">
            {data?.type === "error" ? data?.data?.message : ""}
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
