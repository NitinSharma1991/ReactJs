import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let message;
    return this.state.isLoggedIn ? (
      <div>Welcome Nitin</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // if(this.state.isLoggedIn)    {
    //       message = <div>Welcome Nitin</div>
    //   } else { message = <div>Welcome Guest</div> }

    //   return message;
  }
}

export default UserGreeting;
