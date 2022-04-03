import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
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
  };
  return (
    <div className="container">
      <form className="login-form" onSubmit={login}>
        <legend>Se connecter</legend>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
}
