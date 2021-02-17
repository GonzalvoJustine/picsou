import React, {useContext} from 'react';
import logo from './images/bear.jpg';
import './style/App.scss';
import {BrowserRouter as Router, NavLink, Link, Route, Switch, useParams} from "react-router-dom";
import {FirebaseContext} from './components/firebase';

function App() {
  return (
      <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

              <img src={logo} alt="logo" width="150" height="115"/>

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
                          <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
                      </li>
                  </ul>

                  <div className="d-flex flex-column flex-lg-row bd-highlight mb-3">
                      <button type="button" className="btn btn-dark login">
                          <NavLink to="/connexion">Connexion</NavLink>
                      </button>
                      <button type="button" className="btn btn-dark register">
                          <NavLink to="/inscription">S'inscrire</NavLink>
                      </button>
                  </div>

              </div>
            </div>
          </nav>

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
 * Page de Connexion
 * @returns {JSX.Element}
 * @constructor
 */
function Login() {
    return (
        <div className="container">
            <h1 className="my-5">Connexion</h1>
            <form>
                <div className="form-group">
                    <label>Email : </label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Mot de passe : </label>
                    <input type="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-dark float-right">Se connecter</button>
            </form>
        </div>
    )
}

/**
 * Page d'inscription
 * @returns {JSX.Element}
 * @constructor
 */
function Register() {

    const firebase = useContext(FirebaseContext);

    const data = {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = React.useState(data);
    const [error, setError] = React.useState('');

    const { lastname, firstname, email, password, confirmPassword } = loginData;

    const btn = lastname === '' || firstname === '' || email === '' || password === '' || password !== confirmPassword
    ? <button disabled className="btn btn-dark float-right">S'inscrire</button>
    : <button type="submit" className="btn btn-dark float-right">S'inscrire</button>

    // Gestion des erreurs
    const isErrorMessage = error !== '' && <span>{error.message}</span>

    return (
        <div className="container">
            <h1 className="my-5">Inscription</h1>
            {isErrorMessage}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="lastname">Nom : </label>
                    <input onChange={handleChange} type="text" className="form-control" id="lastname" value={lastname} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">Prénom : </label>
                    <input onChange={handleChange} type="text" className="form-control" id="firstname" value={firstname} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input onChange={handleChange} type="email" className="form-control" id="email" value={email} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe : </label>
                    <input onChange={handleChange} type="password" className="form-control" id="password" value={password} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmation du mot de passe : </label>
                    <input onChange={handleChange} type="password" className="form-control" id="confirmPassword" value={confirmPassword} required/>
                </div>
                {btn}
            </form>
        </div>
    )

    function handleChange(event) {
        setLoginData({
            ... loginData,
            [event.target.id]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const { email, password } = loginData;

        firebase.signupUser(email, password)
        .then(user => {
            setLoginData({... data});
        })
        .catch(error => {
            setError(error);
            setLoginData({... data});
        })
    }
}

export default App;
