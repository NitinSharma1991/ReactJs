import React, { Component, PureComponent } from "react";
import RegComponent from "./RegComponent";
import PureComponents from "./PureComponents";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nitin",
      arr: [1, 2],
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ name: "Nitin" }), 2000);
  }

  render() {
    console.log(`Parent comp render()`);
    return (
      <div>
        {/* <PureComponents name={this.state.name} />
        <RegComponent name={this.state.name} /> */}
        <MemoComp name= {this.state.name}/>
      </div>
    );
  }
}

export default ParentComp;
