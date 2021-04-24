import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border flex font-semibold justify-between p-4">
      <Link href="/">Codetree</Link>
      <div>
        <Link href="/playground">
          <a className="mr-4">playground</a>
        </Link>
        <Link href="/login">
          <a className="mr-4">Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
