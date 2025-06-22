import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/character/add-character" end>
          Add Character
        </NavLink>
        <NavLink to="/character/:userId">Character details</NavLink>
        <NavLink to="/login">Authorization</NavLink>
      </nav>
    </header>
  );
}
