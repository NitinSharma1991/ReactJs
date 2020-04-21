import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputref = React.createRef();
  }

  componentDidMount() {
    this.inputref.current.focus();
    console.log(this.inputref);
  }

  handleClick = () => alert(this.inputref.current.value);
  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" ref={this.inputref} />
        <button onClick={this.handleClick}> Click </button>
      </div>
    );
  }
}

export default RefDemo;
