import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nitin",
      arr: [1, 2],
    };
    this.changeState = this.changeState.bind(this);
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecyclea getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState() {
    this.setState({
      arr: [...this.state.arr, 10],
    });
  }
  render() {
    console.log("LifecycleA  render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
