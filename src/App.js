import React, { useContext } from 'react';
import './style/App.scss';
import {BrowserRouter as Router, NavLink, Route, Switch, useHistory } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
   return (
      <Router>
          <Nav/>
          <Switch>
              <Route path='/' exact>
                  <Home/>
              </Route>
              <Route path='/mon-compte'>
                  <Account/>
              </Route>
              <Route path='/a-propos'>
                  <About/>
              </Route>
              <Route path='/mes-depenses'>
                  <AccountManager/>
              </Route>
              <Route path='/connexion'>
                  <Login/>
              </Route>
              <Route path='/inscription'>
                  <Register/>
              </Route>
          </Switch>
      </Router>
  );
}

/**
 * Page Accueil
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    return (
        <div className="container">
            <h1 className="text-center my-5">Bienvenue</h1>
            <h2>Picsou est un gestionnnaire de dépense</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2>Pourquoi l'utiliser ?</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2>Les avantages que vous trouverez ici !</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    )
}

/**
 * Page À Propos
 * @returns {JSX.Element}
 * @constructor
 */
function About() {
    return (
        <div className="container">
            <h1 className="text-center my-5">À propos de Picsou</h1>
            <h2>Picsou a été créé en 1859</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2>Des amis qui ont développés ensembles ce projet</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <h2>Nous souhaitons que comme nous, Picsou vous plaise !</h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    )
}

/**
 * Page Mon compte
 * @returns {JSX.Element}
 * @constructor
 */
function Account() {
    return (
        <div className="container">
            <h1 className="my-5">Mon Compte</h1>
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        <NavLink to='#' className="list-group-item list-group-item-action active" >
                            Mes informations
                        </NavLink>
                        <NavLink to='#' className="list-group-item list-group-item-action" >
                            Ma Photo
                        </NavLink>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-informations" role="tabpanel" aria-labelledby="list-home-list">
                            Bubu
                        </div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel"
                             aria-labelledby="list-photo-list">...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * Page de gestionnaire de dépense
 * @constructor
 */
function AccountManager() {

    const [userSession, setUserSession] = React.useState(null);


    return userSession === null ? (
        <div>
            <div></div>
            <p>Loading ...</p>
        </div>
    ) : (
        <div>
            Bubu
        </div>
    )
}

export default App;
