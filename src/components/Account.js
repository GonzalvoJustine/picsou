import React, { useContext, useState } from 'react';
import SidebarLeft from './SidebarLeft';
import { FirebaseContext } from './config';
import { useHistory } from 'react-router-dom';

/**
 * Page "Mon compte"
 * Add Sidebar Left with the profil user
 * @returns {JSX.Element}
 * @constructor
 */
function Account () {
  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  // Initialization of History for redirection
  const history = useHistory();

  React.useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : history.push('/');
    });

    if (userSession !== null) {
      firebase.user(userSession.uid)
        .get()
        .then(doc => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch(error => {
          return error;
        });
    }
    return () => {
      listener();
    };
  }, [userSession]);
  return (
    <div className="container">
      <h1 className="my-5">Mon Compte</h1>
      <SidebarLeft userData={userData} updateStateUserData={updateStateUserData}/>
    </div>
  );
  function updateStateUserData (field, value) {
    setUserData({
      ...userData,
      [field]: value
    });
  }
}

export default Account;
