import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/client";

export const CommonPageLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const [session, isLoading] = useSession();

  // @ts-ignore
  return (
    <div className="">
      <div className="h-14 px-8 md:px-12 flex items-center justify-between">
        <div>Codetree</div>
        {isLoading ? <div>Loading ...</div> : ""}
        {session && !isLoading ? (
          <div className="flex">
            <Link href="/dashboard">
              <a className="mr-4">{session?.user?.name}</a>
            </Link>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          ""
        )}
        {!session && !isLoading ? (
          <div className="flex">
            <Link href="/api/auth/signin">
              <a className="mr-4">Sign In</a>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="px-8 md:px-12 pt-10">{children}</div>
    </div>
  );
};
