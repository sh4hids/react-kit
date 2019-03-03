import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text } from "./ui/base-kits";

console.log(React.version);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Text>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </div>
    );
  }
}

export default App;
