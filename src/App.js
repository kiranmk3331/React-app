import "./styles/App.scss";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./components/routes/AppRoutes";

export const MyContext = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          setIsAuthenticated: setIsAuthenticated,
        }}
      >
        <Navbar />
        <AppRoutes />
      </MyContext.Provider>
    </div>
  );
}

export default App;
