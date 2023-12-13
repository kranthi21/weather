// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Dates from './components/Dates'
import Data from './Data/day.json';
import tachyons from 'tachyons';

const initialState = {
    from: '',
    to :''
 };


class App extends Component{
  constructor(){
    super();
    this.state = initialState;
  }

  

  render(){  
    return (
      <div className="App">
        <Dates/>
        
      </div>
    );
  }
}

export default App;
