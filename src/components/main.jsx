import React, { Component } from 'react';
import queryString from 'query-string';
import _ from 'lodash';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      episodes: null,
      image: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.content(nextProps.shows);
  }

  content(shows) {
    if (_.isEmpty(shows)) {
      return;
    }
    let [show] = shows;
    const parsed = queryString.parse(location.search);
    if (shows && 'id' in parsed && parsed.id.match(/^[0-9a-zA-Z]+$/)) {
      show = _.find(shows, { id: parsed.id });
      if (typeof show === 'undefined') {
        return;
      }
    }
    if (show) {
      this.setState({
        title: show.title,
        episodes: show.episodes,
        image: `./${show.product_image_url}`,
      });
    }
  }

  render() {
    return (
      <div className="show">
        <img alt={this.state.title} src={this.state.image} />
        <div className="caption">
          <h2>{this.state.episodes} Episodes</h2>
          <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

export default Main;
