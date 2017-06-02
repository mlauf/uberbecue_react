import React, {Component} from 'react';
import logo from './loggo.png';
import banner from './bannerr.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Grillparty und keinen Grill? Dann miete ganz einfach einen!</h2>
                    <img src={banner} className="App-banner" alt="Grill mit Grillgut"/>


                </div>
                <div className="well">
                    <Button bsStyle="primary" bsSize="large" block componentClass={Link} href="/about">grill</Button>
                    <Button bsSize="large" bsStyle="danger" block componentClass={Link} href="/add">Einen Grill
                        verleihen</Button>


                </div>
            </div>
        );
    }
}

export default App;
