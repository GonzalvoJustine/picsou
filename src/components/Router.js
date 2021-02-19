import React from 'react';
import Home from './Home';
import Account from './Account';
import About from './About';
import AccountManager from './AccountManager';
import Login from './Login';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import { Route, Switch } from 'react-router-dom';

function Router () {
  return (
    <div>
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
        <Route path='/oublie-mdp'>
          <ForgetPassword/>
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
