import React from "react";
import "./App.css";
import Inputs from "./components/Inputs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", valueNext: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, fromSecond) {
    if (fromSecond) {
      this.setState({ valueNext: event.target.value });
    } else {
      this.setState({
        value: event.target.value,
        valueNext: event.target.value
      });
    }
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={event => this.handleChange(event)}
            />
            <input
              type="text"
              value={this.state.valueNext}
              onChange={event => this.handleChange(event, true)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Inputs />
      </>
    );
  }
}

export default App;
