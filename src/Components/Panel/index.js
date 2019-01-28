import React, { Component } from "react";
import "./style.css";

class Panel extends Component {
  render() {
    const { filename, onClick } = this.props;
    return (
      <div>
        <img alt="" src={filename} onClick={onClick} />
      </div>
    );
  }
}

export default Panel;
