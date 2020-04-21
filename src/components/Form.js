import React, { Component } from "react";
import "./MyStyleSheet.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "Angular",
    };

    this.userNameChange = this.userNameChange.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }
  userNameChange(event) {
    console.log(event.target.name);
    this.setState({
      username: event.target.value,
    });
  }

  handleComments(event) {
    this.setState({
      comments: event.target.value,
    });
  }

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  hadnleEnter = (event) => {
    console.log("In here");
    if (event.key === "Enter" && event.shiftKey == false)
      this.handleSubmit(event);
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className="position">Username</label>{" "}
          <input type="text" value={username} onChange={this.userNameChange} />
        </div>
        <br /> <br />
        <div>
          <label>comments</label>
          <textarea
            value={comments}
            onChange={this.handleComments}
            onKeyDown={this.hadnleEnter}
          ></textarea>
        </div>
        <br /> <br />
        <div>
          <label>Topic </label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option>Angular</option>
            <option>React</option>
            <option>Vue</option>
          </select>
        </div>
        <br />
        <div>{this.state.topic}</div>
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
