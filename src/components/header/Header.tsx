import { NavLink } from "react-router";
import classes from "./Header.module.scss";
import { useAuth } from "../../hooks/auth/useAuth";
import Button from "../shared/Button/Button";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/character/add-character"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Add Character
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        )}
        {isLoggedIn && (
          <Button onClick={logout} className={classes.logout_button}>
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
}
