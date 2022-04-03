import React from "react";
import { NavLink } from "react-router-dom";

export default function ConnectNavbar() {
  return (
    <div className="connect-navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Se connecter</NavLink>
          </li>
          <li>
            <NavLink to="/signup">S'inscrire</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
