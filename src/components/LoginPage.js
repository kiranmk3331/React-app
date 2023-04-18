import { useContext, useState } from "react";
import { MyContext } from "../App";
import axios from "axios";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const { setIsAuthenticated } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { email: userEmail, password };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios.post("/auth/login", credentials, { headers }).then((response) => {
      setIsAuthenticated(true);
      let data = response.data;
      setCurrentUser({
        name: data.user.user_name,
        email: data.user.email,
        token: data.token,
        tokenExp: data.exp,
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Email:
        <input
          type="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Login" />
    </form>
  );
}

export default LoginPage;
