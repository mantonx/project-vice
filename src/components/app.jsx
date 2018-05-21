import React, {Component} from "react";
import { render } from "react-dom";

class App extends Component {
  render(){
      let renderData;
      renderData = (
          this.props.children
      );

      return(
          <div>
              <div className="container">
                  <div className="row">
                      <div className="col-xs-10 col-xs-offset-1">
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xs-10 col-xs-offset-1">
                          {renderData}
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;