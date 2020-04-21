import React, { Component } from "react";
import Input from "./components/Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.focus = React.createRef();
  }
  hadnleRef = () => {
    this.focus.current.onfocus();
  };
  render() {
    return (
      <div>
        <Input ref={this.focus} />
        <button onClick={this.hadnleRef}>Click Me</button>
      </div>
    );
  }
}

export default FocusInput;
