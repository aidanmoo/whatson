import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Button } from "@mui/material";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <Link to="/">Browse</Link>
            </li>
            <li>
              <Link to="/profile">My List</Link>
            </li>

            <li>
              {" "}
              <Button onClick={logout}>
                Logout
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
