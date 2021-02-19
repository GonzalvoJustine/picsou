import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FirebaseContext } from './firebase';
import logo from '../images/bear.jpg';

/**
 * Navigation fluid
 * @returns {JSX.Element}
 * @constructor
 */
function Nav () {
  // Initialization
  const firebase = useContext(FirebaseContext);

  // Initialization userState and setUserState => null
  const [userState, setUserState] = React.useState(null);

  // Initialization of History for redirection
  const history = useHistory();

  // Get informations user
  React.useEffect(() => {
    firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
      }
    });
  });

  /**
   * Manager button logout and redirection home
   * @constructor
   */
  function Logout () {
    // Logout user
    firebase.logoutUser();

    // Update user => null
    setUserState(null);

    // Redirection
    history.push('/');
  }

  // Display buttons login, register and logout if login or logout
  let buttons;
  if (userState !== null) {
    buttons = (
      <div className="d-flex flex-column flex-lg-row bd-highlight mb-3">
        <button type="button" className="btn btn-dark login" onClick={Logout}>
          <NavLink to="/deconnexion">Déconnexion</NavLink>
        </button>
      </div>
    );
  } else {
    buttons = (
      <div className="d-flex flex-column flex-lg-row bd-highlight mb-3">
        <button type="button" className="btn btn-dark login">
          <NavLink to="/connexion">Connexion</NavLink>
        </button>
        <button type="button" className="btn btn-dark register">
          <NavLink to="/inscription">S`inscrire</NavLink>
        </button>
      </div>
    );
  }

  // Display links if login or logout
  let links;
  if (userState !== null) {
    links = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" exact>Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mon-compte" className="nav-link">Mon compte</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mes-depenses" className="nav-link">Mes dépenses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
        </li>
      </ul>
    );
  } else {
    links = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" exact>Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to='/' className="nav-link" exact>
            <img src={logo} alt="logo" width="150" height="115"/>
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ml-lg-5" id="navbarSupportedContent">
            {links}
            {buttons}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
