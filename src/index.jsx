import React from "react";
import ReactDOM from "react-dom";
import Routes from './routes';
import './scss/application.scss';

const App = () => {
  return (
    <Routes />
  )
}

ReactDOM.render(<App />, document.getElementById('app'));