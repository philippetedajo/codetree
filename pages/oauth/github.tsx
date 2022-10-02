import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Github = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.code) {
      new Promise((resolve) => {
        window?.opener && window.opener.withOauth(query, "github");
        resolve("done");
      }).then(() => {
        // window.close();
      });
    }
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>loading...</div>
    </div>
  );
};

export default Github;
