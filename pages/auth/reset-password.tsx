import React, { useState } from "react";
import Head from "next/head";
import { useUser } from "../../hooks";
import { useForm } from "react-hook-form";
import { ResetPasswordForm } from "../../_types/auth_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetcher, resetPasswordSchema } from "../../utils";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { responseType } from "../../_types/share_types";

const ResetPassword = () => {
  //here we just check if user is already logged in and redirect to profile
  useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>({});

  const onSubmit = async (formData: ResetPasswordForm) => {
    setLoading(true);

    const response = await fetcher("/api/auth/reset-password", "POST", null, {
      password: formData.password,
      repeatPassword: formData.confirm_password,
      token: router.query.cmrk,
    });
    setResult(response);

    setLoading(false);
  };

  if (result?.type === responseType.success) {
    router.push({
      pathname: "/auth/login",
      query: { event_message: "Your password has been reset successfully !" },
    });
  }

  return (
    <div>
      <Head>
        <title>Reset password | Codetree</title>
        <meta name="description" content="Login to your Codetree account" />
      </Head>

      <form
        className="flex flex-col mt-3 w-80 md:w-112"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-5 text-3xl text-center">Please set a new password</h2>

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
          {result?.type === "error" ? result?.data?.message : ""}
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
