import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {FirebaseContext} from './firebase';

/**
 * Page de Connexion
 * @returns {JSX.Element}
 * @constructor
 */
function Login() {

    // Initialization
    const firebase = useContext(FirebaseContext);

    // Initialization informations login of user
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Initialization button login form
    const [btn, setBtn] = React.useState(false);

    // Initialization error message
    const [error, setError] = React.useState('');

    // Initialization of History for redirection
    let history = useHistory();

    // Manager error
    const isErrorMessage = error !== '' && <span>{error.message}</span>

    // Manager error password, display true or false btn
    React.useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true);
        } else {
            setBtn(false);
        }
    }, [password, email, btn])

    return (
        <div className="container">
            <h1 className="my-5">Connexion</h1>
            {isErrorMessage}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email : </label>
                    <input onChange={handleEmail} type="email" className="form-control" id="email" value={email} required/>
                </div>
                <div className="form-group">
                    <label>Mot de passe : </label>
                    <input onChange={handlePassword} type="password" className="form-control" id="password" value={password} required/>
                </div>
                {btn
                    ? <button type="submit" className="btn btn-dark float-right">Se connecter</button>
                    : <button disabled className="btn btn-dark float-right">Se connecter</button>
                }
            </form>
            <NavLink to="/inscription" className="link">Nouveau sur Picsou ? Inscrivez-vous maintenant.</NavLink>
        </div>
    )

    /**
     * Update Email with setEmail
     * @param event
     */
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    /**
     * Update Password with setPassword
     * @param event
     */
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    /**
     * Manager Submit Form
     * If user log is true => redirection and changed nav
     * Else user log is false => message error
     * @param event
     */
    function handleSubmit(event) {
        event.preventDefault();

        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            history.push('/');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        });
    }
}

export default Login;