import { Axios } from "axios";
import React, { useState } from "react";

const Connect = () => {
  const [choice, setChoice] = useState("");

  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [signupEmail, setSignupEmail] = useState();
  const [signupPseudo, setSignupPseudo] = useState();
  const [signupPassword, setSignupPassword] = useState();

  const login = () => {
    Axios.post(
      `http://localhost:3080/api/user/login`,
      {
        email: loginEmail,
        password: loginPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((user) => {
      console.log(user);
    });
  };
  const signup = () => {
    Axios.post(
      `http://localhost:3080/api/user/signup`,
      {
        email: signupEmail,
        pseudo: signupPseudo,
        password: signupPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((user) => console.log(user));
  };

  return (
    <div className="connect">
      <nav>
        <ul>
          <li
            onClick={() => {
              setChoice("");
            }}
          >
            Se connecter
          </li>
          <li
            onClick={() => {
              setChoice("1");
            }}
          >
            S'inscrire
          </li>
        </ul>
      </nav>

      {choice === "" ? (
        <form onSubmit={login}>
          <legend>Se connecter</legend>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <input type="submit" value="Se connecter" />
        </form>
      ) : (
        <form onSubmit={signup}>
          <legend>S'inscrire</legend>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <label htmlFor="pseudo">Pseudo :</label>
          <input
            type="text"
            id="pseudo"
            placeholder="Entrez votre pseudo"
            onChange={(e) => setSignupPseudo(e.target.value)}
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <input type="submit" value="S'inscrire" />
        </form>
      )}
    </div>
  );
};

export default Connect;
