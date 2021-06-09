import React, { Component } from 'react'
import "./App.css"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Body from "./components/Body"
import Footer from "./components/Footer"


export class App extends Component {
  
  // changeColor = (event)=>{
  //       

  render() {
    return (
        <div>
          <Header />
          <div className="column-div">
            <Sidebar />
            <Body />
          </div>
          <Footer />
      </div>
    )
  }
}

export default App
