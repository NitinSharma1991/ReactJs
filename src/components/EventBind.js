import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Message is not working",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
      this.setState({
          message: "Message is working"
      })
  }
  render() {
    return (
      <div>
          {this.state.message} <br/><br/>
        <button onClick={this.clickHandler}>Event</button>
      </div>
    );
  }
}

export default EventBind;
