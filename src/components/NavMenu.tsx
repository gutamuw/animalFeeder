import { NavLink } from "react-router";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Animals</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
