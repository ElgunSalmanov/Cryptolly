import { NavLink } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <h2 className="header-nav-title">Cryptolly.</h2>
          <ul className="header-nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header-nav-list-item active"
                  : "header-nav-list-item"
              }
              to="/"
            >
              Dashboard
            </NavLink>
            <NavLink className="header-nav-list-item" to="/exchange">
              Exchange
            </NavLink>
            <NavLink className="header-nav-list-item" to="/wallet">
              Wallet
            </NavLink>
            <NavLink className="header-nav-list-item" to="/market">
              Market
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
