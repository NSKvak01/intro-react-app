import React, { Component } from 'react'
import "../App.css"

export class Box extends Component {
    render() {
        let {src} = this.props
        return (
            <div>
                <div className="box-div" style={{backgroundImage:`url(${src})`, color:"white"}}>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Box
