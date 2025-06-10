import { NavLink } from "react-router";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Mata djur</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
