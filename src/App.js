import React, { Component } from "react";
import "./App.css";
import SlotM from "./slot";

class App extends Component {
  render() {
    return (
      <>
        <div>
          🎰 Machine Game 🎰
          <div>
            <SlotM />
          </div>
        </div>
      </>
    );
  }
}

export default App;
