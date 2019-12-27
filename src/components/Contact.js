import React from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";
class Contact extends React.Component {
  state = {
    Message: ""
  };
  handleMessageChange = e => {
    this.setState({ Message: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      Message: ""
    });
  };
  render() {
    return (
      <div className="contact">
        <h3>Napisz do nas</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.Message}
            onChange={this.handleMessageChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.Message !== ""}
          message={
            "Masz niewypełniony formularz, czy na pewno chcesz opuścić tę stronę?"
          }
        />
      </div>
    );
  }
}

export default Contact;
