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
    <section className='section'>
      <App>
        <Switch>
          <Route exact path="/" component={Shows}/>
          <Route exact path="/shows" component={Shows}/>
          <Route component={NoMatch}/>
        </Switch>
      </App>
    </section>
  </Router>
);

class NoMatch extends React.Component {
  render() {
    return <h1>Hello, Matt2</h1>;
  }
}

export default Routes;