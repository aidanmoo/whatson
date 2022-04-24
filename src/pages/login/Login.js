import React from "react";
// styles

import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { TextField, Button, Toolbar } from "@mui/material";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
                          <Toolbar />
        <Toolbar />
      <h2>Login Here</h2>
      <p>Or choose SIGNUP to create an account</p>
      <TextField
          style={{ width: "300px", margin: "5px" }}
          type="email"
          label="Email Address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />

      {!isPending && <Button variant="contained" type="submit">Login</Button>}
      {isPending && (
        <Button variant="contained" disabled>
          Loading
        </Button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
