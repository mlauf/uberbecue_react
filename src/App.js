import React, { Component } from 'react';
import logo from './loggo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Button } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="well">
    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
    <Button bsSize="large" block>Block level button</Button>
        
        
        
  </div>
      </div>
    );
  }
}

export default App;
