import { useState } from "react";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Username:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
      </label>
      <br />
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
