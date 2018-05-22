import React, {Component} from "react";
import { render } from "react-dom";

import fetchShows from '../utils/fetch';
import Nav from './nav';
import Main from './main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          shows: [],
        };
    }
    
    componentDidMount() {
        fetchShows().then((data) => {
            this.setState({
              isLoaded: true,
              shows: data
            });
          },
          (error) => {
              this.setState({
                isLoaded: true,
                error
              });
        });
    }
    
    render() {
        return(
            <div>
                <nav>
                    <Nav shows = {this.state.shows} />
                </nav>
                <main>
                    <Main shows = {this.state.shows}/>
                </main>
            </div>
        );
    }
}

export default App;