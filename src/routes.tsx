import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import { Project } from './pages/Project';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { projects } from './utils/projects';

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
        { projects.map(project => {
          return (
            <Route
              key={project.path}
              exact path={project.path}
              render={() => (
                <Project
                  handleTheme={handleTheme}
                  data={project}
                />
              )}
            />
          )
        })}
        <Route
          render={() => (
            <NotFound
              handleTheme={handleTheme} 
            />
          )}
        />
      </ThemeProvider>
    </Router>
  );
}
