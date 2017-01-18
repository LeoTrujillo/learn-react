import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'


// function Welcome(props){
//   return <h1> Hello, {props.name}</h1>;
// }


//This code is for make a button

class Toggle extends React.Component{
  constructor (props){
    super(props);
    this.state = {isToggleOn :true};

    //This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    // console.log('this is', this);
  }

  render(){
    return(
      // <button onClick={(e)=>this.handleClick(e)}>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
    )
  }
}


//Code for make a clock
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return (
      <div>
        <h2>Hello world!</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Clock/>
        <img className="App-logo" src={logo} alt="Leo"/><br/>
        <Toggle/>
      </div>
    );
  }
}

export default App;
