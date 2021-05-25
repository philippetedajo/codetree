import React, { useState } from "react";
import Head from "next/head";
import { useUser } from "../../hooks";
import { useForm } from "react-hook-form";
import { ForgotPasswordForm } from "../../_types/auth_types";
import { responseType } from "../../_types/share_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetcher, forgotPasswordSchema } from "../../utils";
import CheckYourMail from "../../components/site/CheckYourMail";

const ForgotPassword = () => {
  //here we just check if user is already logged in and redirect to profile
  const { user } = useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const { register, handleSubmit, errors } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (formData: ForgotPasswordForm) => {
    setLoading(true);

    const response = await fetcher(
      "/api/auth/forgot-password",
      "POST",
      null,
      formData
    );
    setData(response);

    setLoading(false);
  };

  if (data?.type === responseType.success) {
    return <CheckYourMail />;
  }

  if (!user || user.isLoggedIn) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <Head>
        <title>Forgot password | Codetree</title>
        <meta name="description" content="Login to your Codetree account" />
      </Head>

      <form
        className="flex flex-col mt-3 w-80 md:w-112"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-8 text-3xl text-center">Get a new password</h2>

        <label className="mb-2">Email *</label>
        <input
          className="border-2 border-black"
          name="email"
          type="email"
          ref={register}
        />
        <small className="mt-1 text-red-500">{errors.email?.message}</small>

        <button
          disabled={loading}
          type="submit"
          className={`bg-blue-600 text-white mt-8 h-10 mb-4 ${
            loading ? "disabled:opacity-70" : ""
          }`}
        >
          {loading ? "... Processing" : "Send"}
        </button>

        <div className="text-red-500">
          {data?.type === responseType.error
            ? data?.data?.data?.details?.email?.message
            : ""}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
