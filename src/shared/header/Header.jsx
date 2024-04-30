import { NavLink } from "react-router-dom";
import { useState } from "react";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import user from "../../assets/icons/user.svg";
import arrow from "../../assets/icons/arrow.svg";
import "./header.scss";

function Header() {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [image, setImage] = useState(user);

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <h2 className="header-nav-title">
            Cryptolly<span className="header-nav-title-point">.</span>
          </h2>
          <ul className="header-nav-list">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "header-nav-list-item active"
                  : "header-nav-list-item"
              }
            >
              Dashboard
            </NavLink>
            <NavLink to="/exchange" className="header-nav-list-item">
              Exchange
            </NavLink>
            <NavLink to="/wallet" className="header-nav-list-item">
              Wallet
            </NavLink>
            <NavLink to="/market" className="header-nav-list-item">
              Market
            </NavLink>
          </ul>
        </nav>
        <div className="header-info">
          <form className="header-info-form">
            <div className="header-info-form-container">
              <img
                className="header-info-form-container-logo"
                src={search}
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="header-info-form-container-search"
              />
            </div>
          </form>
          <img
            className="header-info-notification"
            src={notification}
            alt="notification"
          />
          <div className="header-info-container">
            <span className="header-info-container-name">
              {name} {surname}
            </span>
            <img
              className="header-info-container-user"
              src={image}
              alt="user"
            />
            <img
              className="header-info-container-arrow"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
