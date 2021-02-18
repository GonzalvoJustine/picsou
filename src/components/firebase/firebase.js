import app from 'firebase/app';
import 'firebase/auth';

/**
 * Config Firebase
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, authDomain: string}}
 */
const config = {
    apiKey: "AIzaSyDsWFICvUYKrsIV0RqVs-JEqWsHivA5_kY",
    authDomain: "picsou-c0695.firebaseapp.com",
    projectId: "picsou-c0695",
    storageBucket: "picsou-c0695.appspot.com",
    messagingSenderId: "636453728958",
    appId: "1:636453728958:web:1259576baf144226ada4ef"
};

/**
 * Class Firebase
 * Initialization Auth : Login, Register and Logout
 */
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // Register
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    // Login
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // Logout
    logoutUser = () =>
    this.auth.signOut();

    // Fetch user
    getUserState() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }
}

export default Firebase;