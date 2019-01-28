import React, { Component } from "react";

//import "./style.css";

class Nav extends Component {
  render() {
    const { score, topScore } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
            {score} -- {topScore}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Nav;
