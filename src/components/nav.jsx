import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
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
    const { shows } = nextProps;
    if ('id' in parsed && parsed.id.match(/^[0-9a-zA-Z]+$/)) {
      ({ id } = parsed);
    } else {
      ({ id } = shows);
    }
    shows.forEach((value, key) => {
      if (value.id === id) {
        const previous = (key === 0) ? shows[shows.length - 1] : shows[key - 1];
        const next = (shows.length - 1 === key) ? shows[0] : shows[key + 1];
        menuItems = [previous, shows[key], next];
      }
    });
    this.setState({
      current: id,
      items: menuItems,
    });
  }

  render() {
    const { current, items } = this.state;
    return (
      <div className="nav-container">
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              <Link to={
                `/shows?id=${item.id}`}>
                {index == 0 ? <div className="nav-prev"></div> : ''}
                <img
                  alt={item.title}
                  className={`thumb ${(current === item.id) ? 'current' : ''}`}
                  src={item.product_image_url
                }
                />
                {index === 2 ? <div className="nav-next"></div> : ''}
              </Link>
            </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default Nav;