import React, { useContext } from 'react';
import { FirebaseContext } from './config';

function ForgetPassword () {
  // Initialization
  const firebase = useContext(FirebaseContext);

  // Initialization informations login of user
  const [email, setEmail] = React.useState('');
  // Initialization success message
  const [success, setSuccess] = React.useState(null);
  // Initialization error message
  const [error, setError] = React.useState(null);

  const disabled = email === '';

  return (
    <div className="container">
      <h1 className="my-5">Mot de passe oublié</h1>
      { success && <span className="alert alert-success">{success}</span>}
      { error && <span className="alert alert-danger">{error.message}</span>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email : </label>
          <input onChange={handleEmail} type="email" className="form-control" id="email" value={email} required/>
        </div>
        <button disabled={disabled} type="submit" className="btn btn-dark float-right">Envoyer</button>
      </form>
    </div>
  );

  /**
   * Update Email with setEmail
   * @param event
   */
  function handleEmail (event) {
    setEmail(event.target.value);
  }

  /**
   * Manager Submit Form
   * If user log is true => redirection and changed nav
   * Else user log is false => message error
   * @param event
   */
  function handleSubmit (event) {
    event.preventDefault();

    firebase.passwordReset(email)
      .then(user => {
        setError(null);
        setSuccess('Vous avez reçu un email pour changer votre mot de passe !');
        setEmail('');
      })
      .catch(error => {
        setError(error);
        setEmail('');
      });
  }
}

export default ForgetPassword;
