import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="title">SALUT LES MARTIENS !</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto a
        dolore illo, blanditiis, omnis, nobis ipsum sit facilis fuga deleniti
        sed quisquam exercitationem tempora.
      </p>
      <p>
        Pour pousuivre le voyage <NavLink to="/signup">inscrivez-vous </NavLink>
        ou
        <NavLink to="/login"> connectez-vous !</NavLink>
      </p>
      <div className="connect-btn">
        <NavLink to="/signup">
          <button>Inscription</button>
        </NavLink>
        <NavLink to="/login">
          <button>Connexion</button>{" "}
        </NavLink>
      </div>
    </div>
  );
}
