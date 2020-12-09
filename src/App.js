import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputtedNumber: 0
    };
  }

  increment = () => {
    const newCount = this.state.count + this.state.inputtedNumber;
    this.setState({ count: newCount });
  };

  decrement = () => {
    this.setState({ count: this.state.count - this.state.inputtedNumber });
  };

  changeInput = (event) => {
    let newValue = parseInt(event.target.value);
    if (!newValue) {
      newValue = '';
    }
    this.setState({ inputtedNumber: newValue });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <input value={this.state.inputtedNumber} onChange={this.changeInput} />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
