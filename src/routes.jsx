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
          <Route path="/" component={Shows}/>
          <Route exact path="/shows" component={Shows}/>
          <Route component={NoMatch}/>
        </Switch>
      </App>
    </div>
  </Router>
);

class NoMatch extends React.Component {
  render() {
  return
    <div>
    <img src={PageNotFound} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
    <center><Link to="/">Return to Home Page</Link></center>
    </div>
  };
}

export default Routes;