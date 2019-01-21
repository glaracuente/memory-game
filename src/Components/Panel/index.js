import React, { Component } from "react";
import "./style.css";

class Panel extends Component {
  // Setting the component's initial state
  state = {
    image: `./images/${this.props.filename}.png`,
    clicked: false
  };


  handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.state.clicked) {
      //shuffle and reset current score
      
    }
    else {
      this.setState({ clicked: true });
    }

    console.log(this.state.clicked)
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <img alt='' src={this.state.image} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Panel;
