import { NavLink } from "react-router";
import classes from "./Header.module.scss";

export default function Header() {
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
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}
