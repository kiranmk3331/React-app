import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = { user_name: name, email, password};
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios.post("/users", credentials, { headers }).then((response) => {
      console.log(response.data)
      navigate("/login");
    });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};
