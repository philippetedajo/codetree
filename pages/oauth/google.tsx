import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Google = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.code) {
      window?.opener && window.opener.withGoogle(query);
    }
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>loading...</div>
    </div>
  );
};

export default Google;
