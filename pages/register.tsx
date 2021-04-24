import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validationSchema";
import { RegisterForm } from "../_types";

const Register: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<RegisterForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>Register | Codetree</title>
        <meta name="description" content="Create an account" />
      </Head>
      <div className="border p-4">
        <div
          className="font-semibold cursor-pointer"
          onClick={() => router.back()}
        >
          &#8592; back
        </div>
      </div>
      <div className="flex justify-center pt-14">
        <form
          className="flex flex-col w-80 md:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-8 text-3xl font-bold">Create an account </h2>

          <label className="mb-2 font-semibold">Email</label>
          <input
            className="border-2 border-black"
            name="email"
            type="email"
            ref={register}
          />
          <small className="mt-1 mb-6 font-semibold text-red-500">
            {errors.email?.message}
          </small>

          <label className="mb-2 font-semibold">Password</label>
          <input
            className="border-2 border-black"
            type="password"
            name="password"
            ref={register}
          />
          <small className="mt-1 mb-9 font-semibold text-red-500">
            {errors.password?.message}
          </small>

          <button className="bg-blue-600 text-white font-semibold  h-10">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
