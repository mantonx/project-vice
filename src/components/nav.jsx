import React, {Component} from "react";
import { render } from "react-dom";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import queryString from "query-string";
import _ from 'lodash';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      items: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    let menuItems = [];
    let id = 0;
    const parsed = queryString.parse(location.search);
    const shows = nextProps.shows;
    if ('id' in parsed && parsed.id.match(/^[0-9a-zA-Z]+$/)) {
      id = parsed.id;
    } else {
      id = shows[0].id;
    }
    shows.forEach(function (value, key) {
      if (value.id === id) {
        let previous = (0 === key) ? shows[shows.length - 1] : shows[key - 1];
        let next = (shows.length - 1 === key) ? shows[0] : shows[key + 1];
        menuItems = [previous, shows[key], next];
      }
    });
    this.setState({
      current: id,
      items: menuItems
    });
  }

  render() {
    const { current, items } = this.state;
    return(
        <div className="nav-container">
          <ul>
          {items.map((item, index) => (
            <li key={item.title}>
              {console.log(index)};
              <Link to={
                `/shows?id=${item.id}`}>
                <img className={`thumb ${(current === item.id) ? 'current' : ''}`} src={item.product_image_url
              }/>
              </Link>
            </li>
          ))}
          </ul>
        </div>
    );
  }
}

export default Nav;