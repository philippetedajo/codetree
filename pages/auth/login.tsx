import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../hooks";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../_types/auth_types";
import { fetcher, loginSchema } from "../../utils";
import Head from "next/head";
import { responseType } from "../../_types/share_types";

const Login: React.FC = () => {
  //here we just check if user is already logged in and redirect to profile
  const { user, mutateUser } = useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (formData: LoginForm) => {
    setLoading(true);

    const response = await fetcher("/api/auth/login", "POST", null, formData);
    await mutateUser(response);
    setData(response);

    setLoading(false);
  };

  if (!user || user.isLoggedIn) {
    return <div>...loading</div>;
  }

  return (
    <>
      <Head>
        <title>Login | Codetree</title>
        <meta name="description" content="Login to your Codetree account" />
      </Head>

      <div className="h-screen flex flex-col items-center pt-14">
        <form
          className="flex flex-col mt-3 w-80 md:w-112"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="mb-5 text-xl text-green-500">
            {router?.query?.event_message}
          </h1>
          <h2 className="mb-5 text-3xl ">
            {router?.query?.event_message
              ? "Welcome to Codetree 🔥"
              : "Login to your account"}
          </h2>

          <label className="mb-2">Email *</label>
          <input
            className="border-2 border-black"
            name="email"
            type="email"
            ref={register}
          />
          <small className="mt-1 mb-6 text-red-500">
            {errors.email?.message}
          </small>

          <label className="mb-2">Password *</label>
          <input
            className="border-2 border-black"
            type="password"
            name="min"
            ref={register}
          />
          <small className="mt-1 text-red-500">{errors.min?.message}</small>

          <Link href="/auth/forgot-password">
            <a className="mt-4 text-sm text-gray-500">Forgot your password ?</a>
          </Link>
          <button
            disabled={loading}
            className={`bg-blue-600 text-white mt-8 h-10 mb-4 ${
              loading ? "disabled:opacity-70" : ""
            }`}
          >
            {loading ? "... Processing" : "Login"}
          </button>

          <div className="text-red-500">
            {data?.type === responseType.error ? data?.data?.message : ""}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
