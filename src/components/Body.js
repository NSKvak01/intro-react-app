import React, { Component } from 'react'
import "../App.css"
import Box from "./Box"
import leo from "../leo.jpeg" 
import leo1 from "../leo-1.jpeg" 
import leo2 from "../leo-2.jpeg" 
import leo3 from "../leo3.jpeg" 

export class Body extends Component {
    render() {
        return (
            <div className="body-div">
                <img src={leo} alt="Leo"/>
                <p>Leo is my spiritual animal. It's strong but gorgeous, calm but dangerous. Doesn't panic, always handle things with grace.</p>
                <div className="box">
                    <Box name="square-1" src={leo1}/>
                    <Box name="square-2" src={leo2}/>
                    <Box name="square-3" src={leo3}/>
                </div>
            </div>
        )
    }
}

export default Body
