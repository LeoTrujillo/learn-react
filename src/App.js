import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'


// function Welcome(props){
//   return <h1> Hello, {props.name}</h1>;
// }


function Clock(props){
  return (
    <div>
      <h2>Hello world!</h2>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Clock date={new Date()}/>
        <img className="App-logo" src={logo} alt="Leo"/>
      </div>
    );
  }
}

export default App;
