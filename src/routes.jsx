import React  from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
} from 'react-router-dom';

import App from './components/app'
import Shows from './components/shows'

const Routes = () => (
  <Router>
    <div>
      <App>
        <Switch>
          <Route path="/" component={Home}/>
          <Route exact path="/shows" component={Shows}/>
          <Route component={NoMatch}/>
        </Switch>
      </App>
    </div>
  </Router>
);

class Home extends React.Component {
  render() {
    return <h1>Hello, Matt</h1>;
  }
}

class Forward extends React.Component {
  render() {
    return <h1>Hello, Matt2</h1>;
  }
}

class NoMatch extends React.Component {
  render() {
    return <h1>Hello, Matt2</h1>;
  }
}

export default Routes;