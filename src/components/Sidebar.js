import React, { Component } from 'react'
import "../App.css"
import {v4 as uuidv4} from "uuid"

export class Sidebar extends Component {
    state = {
        // colors:[
        //     {
        //         id:uuidv4(),
        //         color: "peach",
        //     },
        //     {
        //         id:uuidv4(),
        //         color: "white",
        //     },
        //     {
        //         id:uuidv4(),
        //         color: "aqua",
        //     }
        // ],
        color:"Peach",
        changeToPeach:true,
        changeToWhite:false,
        changeToAqua:false
    }

    changeColor = (event)=>{
        if(event.target.innerText === "Peach"){
            this.setState({
                changeToPeach:true,
                changeToWhite:false,
                changeToAqua:false,
            })
        }
        if(event.target.innerText === "White"){
            this.setState({
                changeToPeach:false,
                changeToWhite:true,
                changeToAqua:false,
            })
        }
        if(event.target.innerText === "Aqua"){
            this.setState({
                changeToPeach:false,
                changeToWhite:false,
                changeToAqua:true,
            })
        }
    }
    render() {
        return (
            <div className={`
                ${this.state.changeToPeach && "sidebar-div"} 
                ${this.state.changeToWhite && "background-white"} 
                ${this.state.changeToAqua && "background-aqua"}`}>
                <ul >
                <li onClick={this.changeColor}
                    >Peach</li>
                <li onClick={this.changeColor}>White</li>
                <li onClick={this.changeColor}>Aqua</li>

                </ul>
            </div>
        )
    }
}

export default Sidebar
