import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import Routes from './routes';

const App = () => {
  return (
    <div className="container">
      <Routes />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));