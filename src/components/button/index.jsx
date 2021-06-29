import React, { Component } from "react";
import "./button.scss";

class Button extends Component{
    render(){
        return(
                <a className={"button"} style={this.props.style} href={this.props.buttonURL} target="_blank" rel='noopener noreferrer'>
                    <span className={"text"}>{this.props.buttonText}</span>
                </a>
        )
    }
}

export default Button