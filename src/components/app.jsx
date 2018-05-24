import React, { Component } from 'react';

import fetchShows from '../utils/fetch';
import Nav from './nav';
import Main from './main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    fetchShows().then(
      (data) => {
        this.setState({
          shows: data,
        });
      },
      (error) => {
        console.error(error);
      },
    );
  }

  render() {
    const { shows } = this.state;
    return (
      <div className="container">
        <nav>
          <Nav shows={shows} />
        </nav>
        <main>
          <Main shows={shows} />
        </main>
      </div>
    );
  }
}

export default App;
