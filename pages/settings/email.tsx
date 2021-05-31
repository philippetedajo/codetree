import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SettingsLayout } from "../../components/layouts";
import {
  checkSession,
  withSession,
  fetcher,
  updateEmailSchema,
} from "../../utils";
import { useForm } from "react-hook-form";
import { UpdateEmailForm } from "../../_types/profile_types";
import { useUser } from "../../hooks";

const Email = () => {
  const { user } = useUser();

  const { register, handleSubmit, errors } = useForm<UpdateEmailForm>({
    resolver: yupResolver(updateEmailSchema),
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>({});

  const onSubmit = async (formData: UpdateEmailForm) => {
    console.log(formData);
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/auth/profile/updateEmail`;

    setLoading(true);

    const result = await fetcher(url, "POST", user.token, {
      token: user?.token,
      email: formData.email,
    });
    setResult(result);

    setLoading(false);
  };

  return (
    <SettingsLayout>
      <form
        className="flex flex-col pt-3 w-full md:w-2/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-4 text-3xl ">Change your email </h2>
        <label className="mb-2">Email *</label>
        <input name="email" type="email" ref={register} />
        <small className="mt-1 text-red-500">{errors.email?.message}</small>

        <button
          disabled={loading}
          className={`bg-blue-600 text-white mt-8 h-10 mb-4 ${
            loading ? "disabled:opacity-70" : ""
          }`}
        >
          {loading ? "... Processing" : "Save"}
        </button>

        <div className="text-red-500">
          {result?.type === "error" ? result?.data?.message : ""}
        </div>
      </form>
    </SettingsLayout>
  );
};

export default Email;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  return {
    props: {},
  };
});
