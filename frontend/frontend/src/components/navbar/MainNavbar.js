import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Bars from "../../assets/icons/bars-solid.svg";

export default function MainNavbar() {
  const [toggle, setToggle] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const deconnect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("pseudo");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
  };

  const changeToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div>
      <nav className="main-navbar">
        <div className="bars-container">
          <img
            src={Bars}
            alt="logo navbar responsive"
            className="bars "
            onClick={changeToggle}
          />
        </div>
        {(toggle || largeur > 900) && (
          <ul>
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Annonces
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Mon compte
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {" "}
              &Aacute; propos
            </NavLink>
            <a href="/" onClick={deconnect}>
              Se déconnecter
            </a>
          </ul>
        )}
      </nav>
    </div>
  );
}
