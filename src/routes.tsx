import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

import { Home } from './pages/Home';
import { Test } from './pages/Test';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

export function Routes() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  function handleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route
          exact path="/" 
          render={() => (
            <Home 
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/test"
          component={Test}
        />
      </ThemeProvider>
    </Router>
  );
}
