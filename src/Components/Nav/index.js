import React, { Component } from "react";

//import "./style.css";

class Nav extends Component {
  render() {
    const { score, topScore } = this.props;

    return (
      <div>
        <div className="row justify-content-center bg-primary">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="col-4 mr-3">
              <h2>
                <span className="badge badge-pill badge-danger">
                  Memory Game
                </span>
              </h2>
            </div>
            <div className="col-4">
              <h2>
                <span className="badge mr-2 badge-info">Score</span>
                <span className="badge badge-warning">{score}</span>
              </h2>
            </div>
            <div className="col-4">
              <h3>
                <span className="badge mr-2 badge-info">Top Score</span>
                <span className="badge badge-success">{topScore}</span>
              </h3>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
