import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../_types/auth_types";
import { responseType } from "../../_types/share_types";
import { fetcher, registerSchema } from "../../utils";
import { useUser } from "../../hooks";
import CheckYourMail from "../../components/site/CheckYourMail";
import Link from "next/link";

const Register: React.FC = () => {
  // here we just check if user is already logged in and redirect to profile
  useUser({ redirectTo: "/profile", redirectIfFound: true });

  const { register, handleSubmit, errors } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>({});

  const onSubmit = async ({
    name,
    username,
    email,
    password,
  }: RegisterForm) => {
    setLoading(true);
    setResult({});

    const response = await fetcher("/api/auth/register", "POST", null, {
      name,
      username,
      email,
      password,
    });
    setResult(response);

    setLoading(false);
  };

  if (result?.type === responseType.success) {
    return <CheckYourMail />;
  }

  return (
    <div>
      <Head>
        <title>Register | Codetree</title>
        <meta name="description" content="Create a Codetree account" />
      </Head>

      <form
        className="flex flex-col mt-3 w-80 md:w-112"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-6 text-3xl text-center">Create an account </h2>

        {/*    */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col md:pr-2">
            <label className="mb-2">Full name *</label>
            <input
              className="border-2 border-black mb-1"
              name="name"
              type="text"
              ref={register}
            />
            <small className="mt-1 mb-4 text-red-500">
              {errors.name?.message}
            </small>
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2">Username *</label>
            <input
              className="border-2 border-black mb-1"
              name="username"
              type="text"
              ref={register}
            />
            <small className="mt-1 mb-4 text-red-500">
              {errors.username?.message}
            </small>
          </div>
        </div>

        {/*    */}

        <div className="flex flex-col">
          <label className="mb-2">Email *</label>
          <input
            className="border-2 border-black mb-1"
            name="email"
            type="email"
            ref={register}
          />
          <small className="mt-1 mb-5 text-red-500">
            {errors.email?.message}
          </small>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 ">Password *</label>
          <input
            className="border-2 border-black mb-1"
            type="password"
            name="password"
            ref={register}
          />
          <small className="mt-1 text-red-500">
            {errors.password?.message}
          </small>
        </div>

        <div className="mt-3 text-gray-500 text-sm ">
          Already with us ?
          <Link href="/auth/login">
            <a className="text-green-500 ml-2">Login</a>
          </Link>
        </div>

        <button
          disabled={loading}
          className={`bg-blue-600 text-white mt-7 h-10 mb-4 ${
            loading ? "disabled:opacity-70" : ""
          }`}
        >
          {loading ? "... Processing" : "Create"}
        </button>

        <div className="text-red-500">
          {result?.type === responseType.error
            ? result?.data?.details?.username?.message
            : ""}
        </div>
      </form>
    </div>
  );
};

export default Register;
