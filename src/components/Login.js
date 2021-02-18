import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {FirebaseContext} from './firebase';

/**
 * Page de Connexion
 * @returns {JSX.Element}
 * @constructor
 */
function Login() {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [btn, setBtn] = React.useState(false);
    const [error, setError] = React.useState('');

    let history = useHistory();

    // Gestion des erreurs
    const isErrorMessage = error !== '' && <span>{error.message}</span>

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

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        firebase.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                history.push('/mon-compte');
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            });
    }
}

export default Login;