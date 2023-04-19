import React from "react";
import { Book, LogIn } from "react-feather";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="login">
        <a href="/login">
          <button>
            <LogIn />
            Login
          </button>
        </a>
      </div>
      <a href="/signup">
        <div className="signup">
          <button>
            <Book />
            Sign Up
          </button>
        </div>
      </a>
    </div>
  );
};
