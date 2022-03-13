import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [connect, setConnect] = "";
  useEffect(() => {
    let connect;
    let token = window.localStorage.token;
    if (token) {
      connect = true;
      return (setConnect = connect);
    } else {
      connect = false;
      return (setConnect = connect);
    }
    console.log(connect);
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img src="" alt="Logo du site" />
      </div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Annonces</li>
          </NavLink>
          <NavLink to="/account">
            <li>Mon compte</li>
          </NavLink>
          <NavLink to="/connect">
            <li>{connect ? "Se déconnecter" : "se connecter"} </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
