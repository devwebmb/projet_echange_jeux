import { NavLink } from "react-router-dom";

const Header = () => {
  const deconnect = () => {
    localStorage.clear("token");
    localStorage.clear("pseudo");
    localStorage.clear("email");
    localStorage.clear("isAdmin");
    localStorage.clear("id");

    window.location.href();
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="" alt="Logo du site" />
      </div>
      <nav>
        <label for="toggle">☰</label>
        <input type="checkbox" id="toggle" />
        <ul>
          <button>Déposer une annonce</button>
          <NavLink to="/">
            <li>Annonces</li>
          </NavLink>
          <NavLink to="/account">
            <li>Mon compte</li>
          </NavLink>
          <NavLink
            to={window.localStorage.token ? "/" : "/connect"}
            onClick={deconnect}
          >
            <li>
              {window.localStorage.token ? "Se déconnecter" : "Se connecter"}
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
