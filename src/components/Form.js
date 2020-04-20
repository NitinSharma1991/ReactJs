import React, { Component } from "react";
import "./MyStyleSheet.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };

    this.userNameChange = this.userNameChange.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }
  userNameChange(event) {
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
  render() {
    return (
      <form>
        <div>
          <label className="position">Username</label>{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.userNameChange}
          />
        </div>
        <br /> <br />
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComments}
          ></textarea>
        </div>
        <br /> <br />
        <div>
          <label>Topic </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option>Angular</option>
            <option>React</option>
            <option>Vue</option>
          </select>
          <div>{this.state.topic}</div>
        </div>
      </form>
    );
  }
}

export default Form;
