import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    level: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  /*handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      level: event.target.value
    });
  };*/

  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <p>Hello pick difficulty level:</p>
        <form className="form">
          <input
            value={this.state.level}
            name="level"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Level"
          />
          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
