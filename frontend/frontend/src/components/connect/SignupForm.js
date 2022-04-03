import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [state, setState] = useState({
    email: "",
    pseudo: "",
    password: "",
  });

  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3080/api/user/signup`, {
        email: state.email,
        pseudo: state.pseudo,
        password: state.password,
      })
      .then(() => {
        axios
          .post(`http://localhost:3080/api/user/login`, {
            email: state.email,
            password: state.password,
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("email", data.data.data.email);
            localStorage.setItem("pseudo", data.data.data.pseudo);
            localStorage.setItem("id", data.data.data.id);
            localStorage.setItem("isAdmin", data.data.data.isAdmin);
          });
        navigate("/main");
      });
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={signup}>
        <legend>S'inscrire</legend>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="pseudo">Pseudo :</label>
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          value={state.pseudo}
          onChange={(e) => setState({ ...state, pseudo: e.target.value })}
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
}
