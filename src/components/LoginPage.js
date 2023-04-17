import { useContext, useState } from "react";
import { MyContext } from "../App";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsAuthenticated } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuthenticated(true);
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
