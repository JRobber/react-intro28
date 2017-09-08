import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cheeses, { x, blarg, blargs } from './Cheeses'

class App extends Component {
  constructor(){
    super();
  
    this.state = {
      isWhelmed: true
    }
  }

  sayHello(){
    return (
      <div>Hello!!!!!</div>
    )
  }

  updateWhelmed(){
    var isWhelmed = this.state.isWhelmed;
    this.setState({
      isWhelmed: !isWhelmed,
      age: 7
    })
  }

  render() {

    var age = 7;

    var colorStyle = {
      backgroundColor: this.state.isWhelmed ? 'red' : 'blue'
    }

    return (
      <div className="App">
        <div className="App-header"
             style={ colorStyle }>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => this.updateWhelmed() }>Change Whelmed</button>
        <Cheeses/>
        <Meats/>
      </div>
    );
  }
}

export default App;

//Components in other files
  //export

//style

//state

//functions as components
export function Meats(){
  return (
    <ol>
      <li>Pepperoni</li>
      <li>Ham</li>
      <li>Chicken</li>
      <li>Guilt</li>
    </ol>
  )
}