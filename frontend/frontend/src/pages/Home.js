import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/Prix__6_-removebg-preview (1).png";

export default function Home() {
  return (
    <div className="screen-background">
      <div className="home">
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto a
          dolore illo, blanditiis, omnis, nobis ipsum sit facilis fuga deleniti
          sed quisquam exercitationem tempora.
        </p>
        <p>
          Pour pousuivre le voyage{" "}
          <NavLink to="/signup">inscrivez-vous </NavLink>
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
    </div>
  );
}
