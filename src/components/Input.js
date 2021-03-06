import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  onfocus() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
