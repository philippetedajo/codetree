import React from "react";
import Head from "next/head";

const CheckYourMail = () => {
  return (
    <>
      <Head>
        <title>Verify your email | Codetree</title>
        <meta name="description" content="Create a Codetree account" />
      </Head>
      <div className="flex justify-center items-center mt-20">
        <div className="text-2xl">Please confirm your email to login</div>
      </div>
    </>
  );
};

export default CheckYourMail;
