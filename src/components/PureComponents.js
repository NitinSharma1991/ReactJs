import React, { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    console.log(`Pure Component Render`);
    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureComponents;
