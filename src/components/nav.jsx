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
    let menuItems, test = [];
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
        let previous = (key === 0) ? shows[shows.length - 1] : shows[key - 1];
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
              <Link to={
                `/shows?id=${item.id}`}>
                {index == 0 ? <div className="nav-previous"></div> : ''}
                <img className={`thumb ${(current === item.id) ? 'current' : ''}`} src={item.product_image_url
              }/>
              {index == 2 ? <div className="nav-next"></div> : ''}
              </Link>
            </li>
          ))}
          </ul>
        </div>
    );
  }
}

export default Nav;