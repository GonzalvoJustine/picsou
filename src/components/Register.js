import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {FirebaseContext} from './firebase';

/**
 * Page d'inscription
 * @returns {JSX.Element}
 * @constructor
 */
function Register() {

    // Initialization
    const firebase = useContext(FirebaseContext);

    // Initialization user form
    const data = {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    // Initialization loginData and setLoginData => data (user)
    const [loginData, setLoginData] = React.useState(data);

    // Initialization error message
    const [error, setError] = React.useState('');

    // Initialization of History for redirection
    let history = useHistory();

    const { lastname, firstname, email, password, confirmPassword } = loginData;

    // Manager error password, display true or false btn
    const btn = lastname === '' || firstname === '' || email === '' || password === '' || password !== confirmPassword
        ? <button disabled className="btn btn-dark float-right">S'inscrire</button>
        : <button type="submit" className="btn btn-dark float-right">S'inscrire</button>

    // Manager error
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
                <NavLink to="/connexion" className="link">Déjà inscrit? Connectez-vous.</NavLink>
            </form>
        </div>
    )

    /**
     * Update global input value
     * @param event
     */
    function handleChange(event) {
        setLoginData({
            ...loginData,
            [event.target.id]: event.target.value,
        });
    }

    /**
     * Manager Submit Form
     * If user log is true => redirection and changed nav
     * Else user log is false => message error
     * @param event
     */
    function handleSubmit(event) {
        event.preventDefault();

        const { email, password } = loginData;

        firebase.signupUser(email, password)
            .then(user => {
                setLoginData({ ...data });
                history.push('/mon-compte');
            })
            .catch(error => {
                setError(error);
                setLoginData({ ...data });
            })
    }
}

export default Register;