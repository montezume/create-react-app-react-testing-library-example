import React, { Component } from "react";
import Select from "react-select";
import "./App.css";

const fruits = [
  { label: "Papaya", value: "papaya" },
  { label: "Apple", value: "apple" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="selectInput">Select a fruit</label>

        <Select
          autoFocus={this.props.autoFocus}
          id="selectInput"
          options={fruits}
        />
      </div>
    );
  }
}

App.defaultProps = {
  autoFocus: false
};

export default App;
