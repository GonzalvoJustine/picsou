import React from 'react';
import './style/App.scss';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/toggleDarkOrLight/theme';
import { GlobalStyles } from './components/toggleDarkOrLight/global';
import { useDarkMode } from './components/toggleDarkOrLight/useDarkMode';
import Toggle from './components/toggleDarkOrLight/Toggle';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Account from './components/Account';
import About from './components/About';
import AccountManager from './components/AccountManager';
import './icons/bear-side-view-silhouette.png';
import './icons/bear.png';

/**
 * Display the code of base
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    // Initialization theme Dark Toggle
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    // Display Light or Dark theme
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

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
          <ThemeProvider theme={themeMode}>
              <>
                  <GlobalStyles />
                  <Toggle theme={theme} toggleTheme={toggleTheme} />
                  <span>Un thème {theme === 'light' ? 'clair ' : 'foncé '}!</span>
              </>
          </ThemeProvider>
      </Router>
  );
}

export default App;
