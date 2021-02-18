import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {FirebaseContext} from './firebase';
import logo from "../images/bear.jpg";

/**
 * Navigation fluid
 * @returns {JSX.Element}
 * @constructor
 */
function Nav() {
    const firebase = useContext(FirebaseContext);

    const [userState, setUserState] = React.useState(null);
    console.log(userState);

    let history = useHistory();
    console.log(useHistory);

    React.useEffect(() => {
        firebase.getUserState().then(user => {
            if (user) {
                setUserState(user);
            }
        })
    })

    function Logout() {
        firebase.logoutUser();
        setUserState(null);
        history.push("/");
    }

    let buttons;
    if ( userState !== null ) {
        buttons = (
            <div>
                <button type="button" className="btn btn-dark logout" onClick={Logout}>
                    <NavLink to="/deconnexion">Déconnexion</NavLink>
                </button>
            </div>
        )
    } else {
        buttons = (
            <div>
                <button type="button" className="btn btn-dark login">
                    <NavLink to="/connexion">Connexion</NavLink>
                </button>
                <button type="button" className="btn btn-dark register">
                    <NavLink to="/inscription">S'inscrire</NavLink>
                </button>
            </div>
        )
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

                        <div className="d-flex flex-column flex-lg-row bd-highlight mb-3">
                            {buttons}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Nav;