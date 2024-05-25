import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }


  render() {
    return (
      <div style={{ margin: '2rem' }}>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <div>
          <button onClick={() => {
            this.setState((prev) => ({ count: prev.count + 1 }))
          }}>Increment</button>
          <button onClick={() => {
            this.setState((prev) => ({ count: prev.count - 1 }))
          }}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
