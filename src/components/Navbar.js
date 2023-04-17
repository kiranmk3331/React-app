import React from "react";
import { Book, LogIn } from "react-feather";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="login">
        <button>
          <LogIn />
          Login
        </button>
      </div>
      <div className="signup">
        <button>
          <Book />
          Sign Up
        </button>
      </div>
    </div>
  );
};
