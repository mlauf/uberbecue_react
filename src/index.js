import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route } from 'react-router'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

ReactDOM.render((
  <Router history={customHistory}>
      <div>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
      </div>
  </Router>
), document.getElementById('root'))
