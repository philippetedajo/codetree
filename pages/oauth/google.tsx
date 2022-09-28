import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Google = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.code) {
      new Promise((resolve) => {
        window?.opener && window.opener.withGoogle(query);
        resolve("done");
      }).then(() => {
        window.close();
      });
    }
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>loading...</div>
    </div>
  );
};

export default Google;
