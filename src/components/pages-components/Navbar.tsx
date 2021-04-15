import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border flex font-semibold justify-between p-4">
      <Link to="/">Codetree</Link>
      <div>
        <Link to="/Login" className="mr-4">
          Login
        </Link>
        <Link to="/Register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
