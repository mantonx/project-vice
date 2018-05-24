import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './components/app';

const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/shows" />
      </Switch>
    </App>
  </Router>
);

export default Routes;
