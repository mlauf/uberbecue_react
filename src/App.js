import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './js/bootstrap.min.js';
import './fonts/*';
import  './css/bootstrap-theme.min.css';
import  './css/bootstrap-theme.min.css.map';
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
