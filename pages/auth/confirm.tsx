import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { fetcher } from "../../utils";
import { useUser } from "../../hooks";
import { responseType } from "../../_types/share_types";

const Confirm = () => {
  useUser({
    redirectTo: "/profile",
    redirectIfFound: true,
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>({});

  useEffect(() => {
    const confirmPass = async (pass) => {
      setLoading(true);

      const result = await fetcher("/api/auth/confirm", "POST", null, {
        token: pass,
      });
      setResult(result);

      setLoading(false);
    };

    if (router.isReady) {
      confirmPass(router.query.cmrk);
    }
  }, [router]);

  console.log();

  if (result?.type === responseType.success) {
    router.push({
      pathname: "/auth/login",
      query: {
        event_message: "Your account has been activated successfully !",
      },
    });
  }

  return (
    <>
      <Head>
        <title>Confirm | Codetree</title>
        <meta name="description" content="Create a Codetree account" />
      </Head>

      {loading && (
        <div className="flex justify-center items-center mt-48">
          <div className="text-2xl">
            Please wait while we are validating your account...
          </div>
        </div>
      )}
    </>
  );
};

export default Confirm;
