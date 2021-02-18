import React, {useContext, useState} from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {FirebaseContext} from './firebase';

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
    let history = useHistory();

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
                <NavLink to="/connexion" className="link">Déjà inscrit? Connectez-vous.</NavLink>
            </form>
        </div>
    )

    function handleChange(event) {
        setLoginData({
            ...loginData,
            [event.target.id]: event.target.value,
        });
    }

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