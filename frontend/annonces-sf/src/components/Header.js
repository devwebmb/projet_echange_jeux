import { NavLink } from "react-router-dom";

const Header = () => {
  const deconnect = () => {
    localStorage.clear("token");
    window.location.href();
  };

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
