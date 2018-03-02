import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tetris from './Game/Tetris';

class App extends Component {
  render() {
    Tetris();
    return (
      <div id="myCanvas">
       
      </div>
    );
  }
}

export default App;
