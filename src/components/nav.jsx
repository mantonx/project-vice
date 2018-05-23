import React, {Component} from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom'
import queryString from "query-string";
import _ from 'lodash';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: null,
      current: null,
      next: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const parsed = queryString.parse(location.search);
    const shows = nextProps.shows;
    if ('id' in parsed && parsed.id.match(/^[0-9a-zA-Z]+$/)) {
      let menuItems = [];
      shows.forEach(function (value, key) {
        if (value.id == parsed.id) {
          menuItems['current'] = value.id;
          if (shows[key - 1]) {
            menuItems['previous'] = shows[key - 1].id;
          }
          if (shows[key + 1]) {
            menuItems['next'] = shows[key+1].id;
          }
        }
      });
      this.setState({
        previous: (typeof menuItems['previous'] != 'undefined') ? `shows?id=${menuItems['previous']}` : null,
        next: (typeof menuItems['next'] != 'undefined') ? `shows?id=${menuItems['next']}` : null,
      });
    }
  }

  render() {
    const Previous = () => {
      if (this.state.previous) {
        return <li><Link id='nav-item' className='prev' to={this.state.previous}>Previous</Link></li>
      }
    };
    const Next = () => {
      if (this.state.next) {
        return <li><Link id='nav-item' className ='next' to={this.state.next}>Next</Link></li>
      }
    }
    return(
        <div className="nav-container">
          <ul>
            {Previous()}
            {Next()}
          </ul>
        </div>
    );
  }
}

export default Nav;