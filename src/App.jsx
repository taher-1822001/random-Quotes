import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react'
import Greet from './components/Greet'
import GreetAgain from './components/welcome'
import Hello from './components/NewJSX'
import QuoteComponent from './components/Quote'
import BootstrapComponent from './components/Bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div className="App" >
        {/* <Greet />
        <GreetAgain name ="Taher Ahmed"/>
        <Hello />
        <QuoteComponent /> */}
        <QuoteComponent />
      {/* <BootstrapComponent /> */}

      </div>
    )
  }
}

export default App
