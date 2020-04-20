import React from "react";
import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Nitin",
    };
  }

  changeMessage() {
    this.setState({
      message: "Kaka",
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.message} Sharma to Global Logic</h1>)
        <button onClick={() => this.changeMessage()}>submit</button>
      </div>
    );
  }
}

export default State
