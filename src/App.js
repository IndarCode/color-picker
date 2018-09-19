import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
}

  render() {
    return (
        <header style={{'backgroundColor': 'rgb(' + this.props.red + ', '+ this.props.green + ', ' + this.props.blue + ')' }}>
        <a href="http://indar.xyz" className="logo"><img src={process.env.PUBLIC_URL + '/images/indar-white.png'} alt="" /></a>
        <h1>{this.props.text}</h1>
        </header>
    );
  }
}

export default App;
