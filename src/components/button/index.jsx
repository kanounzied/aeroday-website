import React, { Component } from "react";
import "./button.scss";

class Button extends Component{
    render(){
        return(
                <a class="button" href={this.props.buttonURL} target="_blank">
                    <span class="text">{this.props.buttonText}</span>
                </a>
        )
    }
}

export default Button