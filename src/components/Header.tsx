import NavMenu from "./NavMenu";
import "./scss/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container wrapper">
        <div className="logo">The Zoo</div>

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
