import React, {Component} from "react";
import { render } from "react-dom";
import queryString from "query-string";
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

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src ={this.state.image} />
      </div>
    );
  }

  content(shows) {
    if (_.isEmpty(shows)) {
      return;
    }
    let show = null;
    const parsed = queryString.parse(location.search);
    if (shows && 'id' in parsed && parsed.id.match(/^[0-9a-zA-Z]+$/)) {
      show = _.find(shows, { 'id': parsed.id });
      if (typeof show == 'undefined') {
        return;
      }
    } else {
      show = shows[0];
    }
    if (show) {
      this.setState({
        title: show.title,
        episodes : show.episodes,
        image: show.product_image_url
      });
    }
  };
}

export default Main;