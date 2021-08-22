import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/client";
import Image from "next/image";

export const CommonPageLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const [session, isLoading] = useSession();

  // @ts-ignore
  return (
    <div className="">
      <div className="h-16 px-8 md:px-12 flex items-center justify-between">
        <div>Codetree</div>
        {isLoading ? <div>Loading ...</div> : ""}
        {session && !isLoading ? (
          <div className="flex">
            <Link href="/dashboard">
              <a className="mr-4 flex items-center">
                <Image
                  src={`${session?.user?.image}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="avatar"
                />
                <span className="ml-3 text-gray-500">
                  {session?.user?.name}
                </span>
              </a>
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
