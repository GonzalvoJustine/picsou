import React from 'react';
import './style/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/toggleDarkOrLight/theme';
import { GlobalStyles } from './components/toggleDarkOrLight/global';
import { useDarkMode } from './components/toggleDarkOrLight/useDarkMode';
import Toggle from './components/toggleDarkOrLight/Toggle';
import Nav from './components/Nav';
import Router from './components/Router';

/**
 * Display the code of base
 * @returns {JSX.Element}
 * @constructor
 */
function App () {
  // Initialization theme Dark Toggle
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  // Display Light or Dark theme
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div/>;
  }

  return (
    <BrowserRouter>
      <Nav/>
      <Router/>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <span>Un thème {theme === 'light' ? 'clair ' : 'foncé '}!</span>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
