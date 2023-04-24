import React, { useContext } from "react";
import { Book, LogIn, LogOut } from "react-feather";
import { MyContext } from "../App";

export const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      {isAuthenticated ? (
        <div className="logout">
          <button onClick={handleLogout}>
            <LogOut />
            Logout
          </button>
        </div>
      ) : (
        <>
          <a href="/login">
            <div className="login">
              <button>
                <LogIn />
                Login
              </button>
            </div>
          </a>
          <a href="/signup">
            <div className="signup">
              <button>
                <Book />
                Sign Up
              </button>
            </div>
          </a>
        </>
      )}
    </div>
  );
};
