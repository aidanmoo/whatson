import React from "react";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { TextField, Button, Toolbar } from "@mui/material";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit}>
                    <Toolbar />
        <Toolbar />

      <h2>Signup Here </h2>
      <p>And you can track the movies you want to watch</p>
      <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Display Name"
          variant="outlined"
          onChange={(e) => setdisplayName(e.target.value)}
          value={displayName}
        />
        <br />
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
    
      {!isPending && <Button variant="contained" type="submit">Signup</Button>}
      {isPending && (
        <Button variant="contained" disabled>
          Loading
        </Button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
