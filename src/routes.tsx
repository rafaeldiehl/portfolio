import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

import { Home } from './pages/Home';
import { Nautilus } from './pages/Nautilus';
import { Happy } from './pages/Happy';
import { Proffy } from './pages/Proffy';
import { Podcastr } from './pages/Podcastr';
import { Moveit } from './pages/Moveit';
import { Easybank } from './pages/Easybank';

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
          exact path="/nautilus-calculus"
          render={() => (
            <Nautilus
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/happy"
          render={() => (
            <Happy
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/proffy"
          render={() => (
            <Proffy
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/podcastr"
          render={() => (
            <Podcastr
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/move-it"
          render={() => (
            <Moveit
              handleTheme={handleTheme} 
            />
          )}
        />
        <Route
          exact path="/easybank"
          render={() => (
            <Easybank
              handleTheme={handleTheme} 
            />
          )}
        />
      </ThemeProvider>
    </Router>
  );
}
